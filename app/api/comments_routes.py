from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/')
def index():
    """Getting all comments for a post"""
