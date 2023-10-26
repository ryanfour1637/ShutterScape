from flask import Blueprint, request
from ..models import Favorite, db
from flask_login import login_required, current_user
# from ..forms import FavoriteForm
from datetime import date
from .auth_routes import validation_errors_to_error_messages

favorites_routes = Blueprint('favorites', __name__)


@favorites_routes.route('/<int:id>', methods=["POST"])
@login_required
def create_favorite(id):

    new_form = Favorite(
        user_id = current_user.id,
        post_id = id,
        created_at = date.today()
    )

    db.session.add(new_form)
    db.session.commit()
    return new_form.to_dict()



@favorites_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_favorite(id):
    print("FAV TO DELETE!!!")
    fave_to_delete = Favorite.query.get(id)
    db.session.delete(fave_to_delete)
    db.session.commit()
    return {"message": "Favorite Deleted!"}


# TODO - all favorites needs debugging!
@favorites_routes.route('/')
def get_all_favorites():
    favorites = Favorite.query.all()

    print("hitting route")
    return [favorite.to_dict() for favorite in favorites]

# @favorites_routes.route('/<int:id>')
# @login_required
# def get_one_favorite():
#     fave_to_get = Favorite.query.get(id)

#     return {"message": "Favorite Deleted!"}
