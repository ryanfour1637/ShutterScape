from flask import Blueprint, request
from ..models import Album, Comment, Favorite, Post, User, db
from random import choice, sample
from datetime import date
from flask_login import login_required, current_user
from ..forms import PostForm, UpdatePostForm, CommentForm
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from .auth_routes import validation_errors_to_error_messages

posts_routes = Blueprint('posts', __name__)


@posts_routes.route('/')
def index():
    """Getting 10 random images from our db for the rotating background on our logged OUT homepage"""
    all_posts = Post.query.all()
    post_list = sample(all_posts, 9)

    # list of 10 random post dictionaries are going to be sent to redux.
    return [post.to_dict() for post in post_list]


@posts_routes.route('/all')
@login_required
def all():
    all_posts = Post.query.all()
    return [post.to_dict() for post in all_posts]


@posts_routes.route('/current')
@login_required
def current():
    """Getting 10 random images from our db to show on a logged IN users homepage. None of the photos can be from the logged In user."""
    # all_none_user_posts = Post.query.filter(Post.owner_id.is_not(current_user.id))
    all_user_posts = Post.query.all()

    def filter_user_id(post):

        return post.owner_id != current_user.id
    all_non_user_posts = filter(filter_user_id, all_user_posts)

    ten_posts = sample(list(all_non_user_posts), 9)

    return [post.to_dict() for post in ten_posts]

    # list of 10 random post dictionaries are going to sent, that are not the current users.
    # this is not tested bc it needs to be done on the front end to ensure there are no current user posts included.

# May we look into Eager Loading Users table?




@posts_routes.route('/new', methods=['GET', 'POST'])
@login_required
def new_post():
    form = PostForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

        post = Post(
            owner_id = current_user.id,
            title = form.data['title'],
            album_id = form.data['album_id'],
            photo_url = url,
            description = form.data['description'],
            tag = form.data['tag'],
            created_at = date.today()
        )

        db.session.add(post)
        db.session.commit()
        # this is a post dictionary.
        # this needs to be validated on the front end once its built out.
        return {"resPost": post.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@posts_routes.route('/no_album', methods=['GET', 'POST'])
@login_required
def new_post_no_album():
    form = PostForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

        post = Post(
            owner_id = current_user.id,
            title = form.data['title'],
            album_id = None,
            photo_url = url,
            tag = form.data['tag'],
            description = form.data['description'],
            created_at = date.today()
        )

        db.session.add(post)
        db.session.commit()
        # this is a post dictionary.
        # this needs to be validated on the front end once its built out.
        return {"resPost": post.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@posts_routes.route("/update/<int:id>", methods=["PUT"])
@login_required
def update_post(id):
    post_to_update = Post.query.get(id)
    form = UpdatePostForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        post_title=form.data['title']
        post_tag=form.data['tag']
        post_description=form.data['description']

        post_to_update.title=post_title
        post_to_update.tag=post_tag
        post_to_update.description=post_description

        db.session.commit()
        # this is a post dictionary.
        # this needs to be validated on the front end once its built out.
        return {"updated": "updated"}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@posts_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_posts(id):
    post_to_delete = Post.query.get(id)
    if id < 101:
        db.session.delete(post_to_delete)
        db.session.commit()
        return 'Success, your post was deleted.'
    elif id > 100:

        file_delete = remove_file_from_s3(post_to_delete.photo_url)

        db.session.delete(post_to_delete)
        db.session.commit()
        return 'Success, your post was deleted.'
    else:
        return {"Error": "Post Delete Error, please try again"}


@posts_routes.route('/<int:id>')
@login_required
def get_post_details(id):
    post = Post.query.get(id)

    return post.to_dict()


@posts_routes.route('/<int:id>/comments/', methods=["POST"])
@login_required
def create_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        create_comment = Comment(
            user_id=current_user.id,
            post_id=id,
            comment=data['comment'],
            created_at=date.today()
        )

        db.session.add(create_comment)
        db.session.commit()

        return create_comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Not sure about how to update comment--by comment ID?


@posts_routes.route('/<int:id>/comments', methods=["PUT"])
@login_required
def update_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        data = form.data
        create_comment = Comment(
            user_id=current_user.id,
            post_id=id,
            comment=data['comment'],
            created_at=date.today()
        )

        db.session.add(create_comment)
        db.session.commit()
        # this is a post dictionary.
        # this needs to be validated on the front end once its built out.
        return create_comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@posts_routes.route('/<int:id>/')
def post_by_id():
    """Get post by post ID to show on Post Details Page (when user clicks on a photo post)"""
    post_to_get = Post.query.get(id)

    return post_to_get.to_dict()
