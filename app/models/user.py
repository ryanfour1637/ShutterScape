from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String(50), nullable = False)
    last_name = db.Column(db.String(50), nullable = False)
    age = db.Column(db.Integer, nullable = False)
    username = db.Column(db.String(50), nullable = False, unique = True)
    email = db.Column(db.String(50), nullable = False, unique = True)
    hashed_password = db.Column(db.String, nullable = False)
    my_fav_id = db.relationship("Favorite", back_populates = "my_fav_user_id", cascade = "all, delete-orphan")
    my_post_id = db.relationship("Post", back_populates = "my_post_user_id", cascade = "all, delete-orphan")
    my_comment_id = db.relationship("Comment", back_populates = "my_comment_user_id", cascade = "all, delete-orphan")
    my_album_id = db.relationship("Album", back_populates = "my_album_user_id", cascade = "all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self, my_album_id = False):
        return_dict = {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "age": self.age,
            "username": self.username,
            "email": self.email,
            # "albums": [album.to_dict() for album in self.my_album_id]
        }
        if self.my_album_id:
            return_dict["albums"] = [album.to_dict() for album in self.my_album_id],
        return return_dict

