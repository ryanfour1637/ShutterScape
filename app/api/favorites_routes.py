from flask import Blueprint, request
from ..models import Favorite, db
from flask_login import login_required, current_user

favorites_routes = Blueprint('favorites', __name__)

@favorites_routes.route('/')
@login_required
def get_all_favorites():
    favorites = Favorite.query.all()

    return [favorite.to_dict() for favorite in favorites]


@favorites_routes.route('/<int:favId>')
@login_required
def get_one_favorite():
    fave_to_get = Favorite.get(id)

    return fave_to_get.to_dict()


@favorites_routes.route('/<int:favId>', methods=['DELETE'])
@login_required
def delete_favorite():
    fave_to_delete = Favorite.get(id)

    db.session.delete(fave_to_delete)
    db.session.commit()
    return 'Success, your favorite was deleted.'
