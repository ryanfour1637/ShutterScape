from .db import db, environment, SCHEMA, add_prefix_for_prod

class Album(db.Model):
    __tablename__ = "albums"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    title = db.Column(db.String, nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    my_album_user_id = db.relationship("User", back_populates = "my_album_id")
    my_album_post_id = db.relationship("Post", back_populates = "my_post_album_id")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "title": self.title,
            "createdAt": self.created_at
        }