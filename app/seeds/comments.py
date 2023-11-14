from faker import Faker
from ..models import User, Post, Favorite, Comment, Album, db, environment, SCHEMA
from random import randint
from datetime import date
from sqlalchemy.sql import text

fake = Faker()

def seed_comments():
    for post_id in range(1, 101):
        for _ in range(10):
            user_id = randint(1, len(User.query.all()))
            new_comment = Comment(
                user_id=user_id,
                post_id=post_id,
                comment=fake.text(),
                created_at=date.today()
            )
            db.session.add(new_comment)

    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
