from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
def index():
    return 'posts routes working'
