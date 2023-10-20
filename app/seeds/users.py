from ..models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint
from datetime import date
from faker import Faker

fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    new_user1 = User(
    first_name = fake.first_name(),
    last_name = fake.last_name(),
    age = randint(13,100),
    username = fake.name(),
    email = fake.email(),
    hashed_password = fake.password()
    )
    new_user2 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user3 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user4 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user5 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user6 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user7 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user8 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user9 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )
    new_user10 = User(
        first_name = fake.first_name(),
        last_name = fake.last_name(),
        age = randint(13,100),
        username = fake.name(),
        email = fake.email(),
        hashed_password = fake.password()
        )

    users_list = [new_user1, new_user2, new_user3, new_user4, new_user5, new_user6, new_user7, new_user8, new_user9, new_user10]
    [db.session.add(user) for user in users_list]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()