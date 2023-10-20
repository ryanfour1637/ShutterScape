from ..models import db, User, environment, SCHEMA, Album
from sqlalchemy.sql import text
from random import randint
from datetime import date
from faker import Faker

fake = Faker()

def seed_albums():
    new_album1 = Album(
        user_id = 1,
        title = "Landscapes",
        created_at = date.today()
    )
    new_album2 = Album(
        user_id = 2,
        title = "Forests",
        created_at = date.today()
    )
    new_album3 = Album(
        user_id = 3,
        title = "Nightlife",
        created_at = date.today()
    )
    new_album4 = Album(
        user_id = 4,
        title = "Food",
        created_at = date.today()
    )
    new_album5 = Album(
        user_id = 5,
        title = "Street",
        created_at = date.today()
    )
    new_album6 = Album(
        user_id = 6,
        title = "Urban",
        created_at = date.today()
    )
    new_album7 = Album(
        user_id = 7,
        title = "Festivals",
        created_at = date.today()
    )
    new_album8 = Album(
        user_id = 8,
        title = "Cats",
        created_at = date.today()
    )
    new_album9 = Album(
        user_id = 9,
        title = "Dogs",
        created_at = date.today()
    )
    new_album10 = Album(
        user_id = 10,
        title = "Cities",
        created_at = date.today()
    )
    all_albums = [new_album1, new_album2, new_album3, new_album4, new_album5, new_album6, new_album7, new_album8, new_album9, new_album10]
    [db.session.add(album) for album in all_albums]
    db.session.commit()

def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))
        
    db.session.commit()