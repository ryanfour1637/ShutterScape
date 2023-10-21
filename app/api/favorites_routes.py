from flask import Blueprint
from ..models import Album, Comment, Favorite, Post, User

favorites_routes = Blueprint('favorites', __name__)

@favorites_routes.route('/')
def index():
    return 'fav routes working'
