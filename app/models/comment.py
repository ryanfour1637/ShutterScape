from .db import db, environment, SCHEMA, add_prefix_for_prod

class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable = False)
    comment = db.Column(db.String(1000), nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    my_comment_user_id = db.relationship("User", back_populates = "my_comment_id")
    my_comment_post_id = db.relationship("Post", back_populates = "my_post_comment_id")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "postId": self.post_id,
            "comment": self.comment,
            "createdAt": self.created_at,
            "users": self.my_comment_user_id.to_dict()
        }
