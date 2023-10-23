from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User, db
from flask_login import login_required

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/all')
@login_required
def get_all_comments():
    all_comments = Comment.query.all()
    return [comment.to_dict() for comment in all_comments]


@comments_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment_to_delete = Comment.query.get(id)
    db.session.delete(comment_to_delete)
    db.session.commit()
    return {"Message" : "Comment Deleted"}
