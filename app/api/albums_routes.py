from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User

albums_routes = Blueprint('albums', __name__)

@albums_routes.route('/')
def index():
    return 'albums routes working'
