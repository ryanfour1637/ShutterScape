from .db import db, environment, SCHEMA, add_prefix_for_prod


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
    album_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("albums.id")))
    title = db.Column(db.String(50), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    my_post_user_id = db.relationship("User", back_populates="my_post_id")
    my_post_fav_id = db.relationship(
        "Favorite", back_populates="my_fav_post_id", cascade="all, delete-orphan")
    my_post_comment_id = db.relationship(
        "Comment", back_populates="my_comment_post_id", cascade="all, delete-orphan")
    my_post_album_id = db.relationship(
        "Album", back_populates="my_album_post_id")

    def to_dict(self, my_post_fav_id = False):
        return_dict = {
            "id": self.id,
            "ownerId": self.owner_id,
            "albumId": self.album_id,
            "title": self.title,
            "photoUrl": self.photo_url,
            "description": self.description,
            "createdAt": self.created_at,
            'users': self.my_post_user_id.to_dict(),
            'albums': self.my_post_album_id.to_dict(),
        }
        if my_post_fav_id:
            return_dict[ "favorites"] = self.my_post_fav_id.to_dict()

        return return_dict
