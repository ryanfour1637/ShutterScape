from flask import Blueprint, request
from ..models import Album, Comment, Favorite, Post, User, db
from flask_login import current_user, login_required
from datetime import date
from .auth_routes import validation_errors_to_error_messages
from ..forms import AlbumForm

albums_routes = Blueprint('albums', __name__)

@albums_routes.route('/new', methods=["POST"])
def create_new_album():
    form = AlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        the_title = form.data["title"]

        new_album = Album(
            user_id = current_user.id,
            title = the_title,
            created_at = date.today()
        )
        db.session.add(new_album)
        db.session.commit()
        return new_album.to_dict()
    else:
        return {"errors": "Invalid Album Title"}, 400

@albums_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_one_album(id):
    album_to_delete = Album.query.get(id)
    print(album_to_delete, "***************")
    if album_to_delete:
        db.session.delete(album_to_delete)
        db.session.commit()
        return {"message": "Delete successful"}
    else:
        return {"errors": "Album Not Found"}, 400