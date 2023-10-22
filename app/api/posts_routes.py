from flask import Blueprint, request
from ..models import Album, Comment, Favorite, Post, User, db
from random import choice, sample
from flask_login import login_required, current_user
from ..forms import PostForm, UpdatePostForm
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from .auth_routes import validation_errors_to_error_messages

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
def index():
    """Getting 10 random images from our db for the rotating background on our logged OUT homepage"""
    all_posts = Post.query.all()
    post_list = sample(all_posts, 10)
    print(post_list)

    #list of 10 random post dictionaries are going to be sent to redux.
    return [post.to_dict() for post in post_list]

@posts_routes.route('/current')
@login_required
def current():
    """Getting 10 random images from our db to show on a logged IN users homepage. None of the photos can be from the logged In user."""
    # all_none_user_posts = Post.query.filter(Post.owner_id.is_not(current_user.id))
    all_none_user_posts = Post.query.all()

    #list of 10 random post dictionaries are going to sent, that are not the current users.
    #this is not tested bc it needs to be done on the front end to ensure there are no current user posts included.
    return [post.to_dict() for post in all_none_user_posts]


@posts_routes.route('/new', methods=['GET', 'POST'])
@login_required
def new_post(form):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        post = Post(
            owner_id=current_user.id,
            title=form.data['title'],
            photo_url=upload['url'],
            description=form.data['description'],
        )
        db.session.add(post)
        db.session.commit()
        #this is a post dictionary.
        #this needs to be validated on the front end once its built out.
        return post.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@posts_routes.route("/update/<int:id>", methods=["PUT"])
@login_required
def update_post(id):
    form = UpdatePostForm()

    if form.validate_on_submit():
        post_to_update = Post.query.get(id)
        post = Post(
            owner_id=current_user.id,
            title=form.data['title'],
            photo_url=post_to_update['photo_url'],
            description=form.data['description'],
        )

        db.session.add(post)
        db.session.commit()
        #this is a post dictionary.
        #this needs to be validated on the front end once its built out.
        return post.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@posts_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_posts(id):
    post_to_delete = Post.query.get(id)

    file_delete = remove_file_from_s3(post_to_delete.image)
    print(file_delete)

    if file_delete is True:
        db.session.delete(post_to_delete)
        db.session.commit()
        return
    else:
        return {"Error": "Post Delete Error, please try again"}

@posts_routes.route('/<int:id>')
@login_required
def get_post_details(id):
    post = Post.query.get(id)

    return post.to_dict()
