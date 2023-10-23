from faker import Faker
from ..models import User, Post, Favorite, Comment, Album, db, environment, SCHEMA
from random import randint
from datetime import date
from sqlalchemy.sql import text

fake = Faker()

def seed_comments():
    new_comment1 = Comment(
        user_id = 1,
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment2 = Comment(
        user_id = 1,
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment3 = Comment(
        user_id = 1,
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment4 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment5 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment6 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment7 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment8 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment9 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    new_comment10 = Comment(
        user_id = randint(1, len(User.query.all())),
        post_id = 1,
        comment = fake.text(),
        created_at = date.today()
    )
    all_comments = [new_comment1, new_comment2, new_comment3, new_comment4, new_comment5, new_comment6, new_comment7, new_comment8, new_comment9, new_comment10]
    [db.session.add(comment) for comment in all_comments]
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
