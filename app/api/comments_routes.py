from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/new')
def create_comment():
    """Crate a comment for a post"""
