from .db import db, environment, SCHEMA, add_prefix_for_prod

class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    my_fav_user_id = db.relationship("User", back_populates = "my_fav_id")
    my_fav_post_id = db.relationship("Post", back_populates = "my_post_fav_id")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "postId": self.post_id,
            "createdAt": self.created_at
        }
