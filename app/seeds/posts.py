from faker import Faker
from ..models import User, Post, Favorite, Comment, Album, db, environment, SCHEMA
from random import randint
from datetime import date
from sqlalchemy.sql import text

fake = Faker()


def seed_posts():
    new_post_1 = Post(
        owner_id=1,
        album_id=1,
        title="On Top of the World",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-01.jpg",
        description="The sky on the top of my hike.",
        created_at=date.today()
    )
    db.session.add(new_post_1)

    new_post_2 = Post(
        owner_id=1,
        album_id=1,
        title="Road to the Mountains",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-02.jpg",
        description="Mountain ranges.",
        created_at=date.today()
    )
    db.session.add(new_post_2)

    new_post_3 = Post(
        owner_id=1,
        album_id=1,
        title="Dock",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-05.jpg",
        description="My family's lake house.",
        created_at=date.today()
    )
    db.session.add(new_post_3)

    new_post_4 = Post(
        owner_id=1,
        album_id=1,
        title="Creek",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-07.jpg",
        description="Landscape behind my ranch.",
        created_at=date.today()
    )
    db.session.add(new_post_4)

    new_post_5 = Post(
        owner_id=1,
        album_id=1,
        title="The Bay",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-08.jpg",
        description="The gates to adventure.",
        created_at=date.today()
    )
    db.session.add(new_post_5)

    new_post_6 = Post(
        owner_id=1,
        album_id=1,
        title="River Meets Ocean",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-10.jpg",
        description="The edge of the continent.",
        created_at=date.today()
    )
    db.session.add(new_post_6)

    new_post_7 = Post(
        owner_id=1,
        album_id=1,
        title="Purple Haze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-12.jpg",
        description="Welcome to the jungle :).",
        created_at=date.today()
    )
    db.session.add(new_post_7)

    new_post_8 = Post(
        owner_id=1,
        album_id=1,
        title="A Chance Encounter",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-13.jpg",
        description="Love at the lake.",
        created_at=date.today()
    )
    db.session.add(new_post_8)

    new_post_9 = Post(
        owner_id=1,
        album_id=1,
        title="Seaside Escape",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-15.jpg",
        description="A photo captured on a summer walk...",
        created_at=date.today()
    )
    db.session.add(new_post_9)

    new_post_10 = Post(
        owner_id=1,
        album_id=1,
        title="Shine On",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-18.jpg",
        description="A walk in the hills with plenty of thrills.",
        created_at=date.today()
    )
    db.session.add(new_post_10)

    ######################### 2 #########################

    new_post_11 = Post(
        owner_id=2,
        album_id=2,
        title="Forrest Labyrinth",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-20.jpg",
        description="A walk among the trees.",
        created_at=date.today()
    )
    db.session.add(new_post_11)

    new_post_12 = Post(
        owner_id=2,
        album_id=2,
        title="Light in the Trees",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-21.jpg",
        description="A memory I won't forget.",
        created_at=date.today()
    )
    db.session.add(new_post_12)

    new_post_13 = Post(
        owner_id=2,
        album_id=2,
        title="The Giant",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-22.jpg",
        description="The foot of a tree.",
        created_at=date.today()
    )
    db.session.add(new_post_13)

    new_post_14 = Post(
        owner_id=2,
        album_id=2,
        title="Shroomz",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-23.jpg",
        description="Sunset amongst the trees with plenty of fungi.",
        created_at=date.today()
    )
    db.session.add(new_post_14)

    new_post_15 = Post(
        owner_id=2,
        album_id=2,
        title="Outlook",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-24.jpg",
        description="A nice clear view of the forrest",
        created_at=date.today()
    )
    db.session.add(new_post_15)

    new_post_16 = Post(
        owner_id=2,
        album_id=2,
        title="Thinking About Life",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-25.jpg",
        description="Caught in deep thought.",
        created_at=date.today()
    )
    db.session.add(new_post_16)

    new_post_17 = Post(
        owner_id=2,
        album_id=2,
        title="Lady of the Woods",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-28.jpg",
        description="Sitting on a tree.",
        created_at=date.today()
    )
    db.session.add(new_post_17)

    new_post_18 = Post(
        owner_id=2,
        album_id=2,
        title="Waterfall",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-29.jpg",
        description="Brazil has beautiful waterfalls.",
        created_at=date.today()
    )
    db.session.add(new_post_18)

    new_post_19 = Post(
        owner_id=2,
        album_id=2,
        title="Sun Sneaking In",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-27.jpg",
        description="A weekend at the meadows is good for the soul.",
        created_at=date.today()
    )
    db.session.add(new_post_19)

    new_post_20 = Post(
        owner_id=2,
        album_id=2,
        title="Skyview",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-26.jpg",
        description="A skyview of the woods.",
        created_at=date.today()
    )
    db.session.add(new_post_20)

    ######################### 3 #########################

    new_post_21 = Post(
        owner_id=3,
        album_id=3,
        title="Friend's Wedding",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-31.jpg",
        description="Mazel Tov",
        created_at=date.today()
    )
    db.session.add(new_post_21)

    new_post_22 = Post(
        owner_id=3,
        album_id=3,
        title="Hey DJ",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-32.jpg",
        description="Spin that record...",
        created_at=date.today()
    )
    db.session.add(new_post_22)

    new_post_23 = Post(
        owner_id=3,
        album_id=3,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-33.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_23)

    new_post_24 = Post(
        owner_id=3,
        album_id=3,
        title="Looking Up",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-41.jpg",
        description="My trip to Times Square.",
        created_at=date.today()
    )
    db.session.add(new_post_24)

    new_post_25 = Post(
        owner_id=3,
        album_id=3,
        title="Saturdaze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-35.jpg",
        description="The club last weekend was great!",
        created_at=date.today()
    )
    db.session.add(new_post_25)

    new_post_26 = Post(
        owner_id=3,
        album_id=3,
        title="New Years 2022",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-36.jpg",
        description="A night I will never forget. Party on!!!",
        created_at=date.today()
    )
    db.session.add(new_post_26)

    new_post_27 = Post(
        owner_id=3,
        album_id=3,
        title="Best Friendz",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-37.jpg",
        description="I love you Amanda!!!",
        created_at=date.today()
    )
    db.session.add(new_post_27)

    new_post_28 = Post(
        owner_id=3,
        album_id=3,
        title="Bottle Service",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-38.jpg",
        description="VVVVVEEEEGGGGAAAASSSSS!!!!",
        created_at=date.today()
    )
    db.session.add(new_post_28)

    new_post_29 = Post(
        owner_id=3,
        album_id=3,
        title="Makeup Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-39.jpg",
        description="Backstage access before my show. Behind the scenes.",
        created_at=date.today()
    )
    db.session.add(new_post_29)

    new_post_30 = Post(
        owner_id=3,
        album_id=3,
        title="Up is Down",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-40.jpg",
        description="A walk on my last trip!",
        created_at=date.today()
    )
    db.session.add(new_post_30)

    ######################### 4 #########################

    new_post_31 = Post(
        owner_id=4,
        album_id=4,
        title="Stack It",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-42.jpg",
        description="A lovely Sunday brunch.",
        created_at=date.today()
    )
    db.session.add(new_post_31)

    new_post_32 = Post(
        owner_id=4,
        album_id=4,
        title="Cheezecake",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-43.jpg",
        description="A nice treat!",
        created_at=date.today()
    )
    db.session.add(new_post_32)

    new_post_33 = Post(
        owner_id=4,
        album_id=4,
        title="Waffle House",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-44.jpg",
        description="Fall assortment of delicious yummiez.",
        created_at=date.today()
    )
    db.session.add(new_post_33)

    new_post_34 = Post(
        owner_id=4,
        album_id=4,
        title="English Breakfast",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-45.jpg",
        description="Made with love for the love of my life.",
        created_at=date.today()
    )
    db.session.add(new_post_34)

    new_post_35 = Post(
        owner_id=4,
        album_id=4,
        title="Tea Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-46.jpg",
        description="Two loves sharing a moment over tea.",
        created_at=date.today()
    )
    db.session.add(new_post_35)

    new_post_36 = Post(
        owner_id=4,
        album_id=4,
        title="Squeeze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-47.jpg",
        description="Every little detail caught in a moment before a meal.",
        created_at=date.today()
    )
    db.session.add(new_post_36)

    new_post_37 = Post(
        owner_id=4,
        album_id=4,
        title="Cake Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-48.jpg",
        description="Birthday cake made for Tristan.",
        created_at=date.today()
    )
    db.session.add(new_post_37)

    new_post_38 = Post(
        owner_id=4,
        album_id=4,
        title="Drizzle Dance",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-49.jpg",
        description="Waffles or pancakes?",
        created_at=date.today()
    )
    db.session.add(new_post_38)

    new_post_39 = Post(
        owner_id=4,
        album_id=4,
        title="Taste Test",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-50.jpg",
        description="A photo that hits most of the senses.",
        created_at=date.today()
    )
    db.session.add(new_post_39)

    new_post_40 = Post(
        owner_id=4,
        album_id=4,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-51.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_40)

    ######################### 5 #########################

    new_post_41 = Post(
        owner_id=5,
        album_id=5,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-53.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_41)

    new_post_42 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-54.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_42)

    new_post_43 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-55.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_43)

    new_post_44 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-56.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_44)

    new_post_45 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-57.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_45)

    new_post_46 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-58.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_46)

    new_post_47 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-59.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_47)

    new_post_48 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-60.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_48)

    new_post_49 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-61.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_49)

    new_post_50 = Post(
        owner_id=5,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-62.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_50)

    ######################### 6 #########################

    new_post_51 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-63.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_51)

    new_post_52 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-64.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_52)

    new_post_53 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-65.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_53)

    new_post_54 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-66.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_54)

    new_post_55 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-67.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_55)

    new_post_56 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-68.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_56)

    new_post_57 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-69.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_57)

    new_post_58 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-70.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_58)

    new_post_59 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-71.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_59)

    new_post_60 = Post(
        owner_id=6,
        album_id=6,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-72.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_60)

    ######################### 7 #########################

    new_post_61 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-74.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_61)

    new_post_62 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-75.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_62)

    new_post_63 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-76.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_63)

    new_post_64 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-77.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_64)

    new_post_65 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-78.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_65)

    new_post_66 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-79.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_66)

    new_post_67 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-80.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_67)

    new_post_68 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-81.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_68)

    new_post_69 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-82.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_69)

    new_post_70 = Post(
        owner_id=7,
        album_id=7,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-84.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_70)

    ######################### 8 #########################

    new_post_71 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-85.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_71)

    new_post_72 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-86.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_72)

    new_post_73 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-87.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_73)

    new_post_74 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-88.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_74)

    new_post_75 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-89.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_75)

    new_post_76 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-90.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_76)

    new_post_77 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-91.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_77)

    new_post_78 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-92.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_78)

    new_post_79 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-93.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_79)

    new_post_80 = Post(
        owner_id=8,
        album_id=8,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-95.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_80)

    ######################### 9 #########################

    new_post_81 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-096.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_81)

    new_post_82 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-097.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_82)

    new_post_83 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-098.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_83)

    new_post_84 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-099.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_84)

    new_post_85 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-100.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_85)

    new_post_86 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-101.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_86)

    new_post_87 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-102.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_87)

    new_post_88 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-103.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_88)

    new_post_89 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-104.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_89)

    new_post_90 = Post(
        owner_id=9,
        album_id=9,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-106.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_90)

    ######################### 10 #########################

    new_post_91 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-108.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_91)

    new_post_92 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-109.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_92)

    new_post_93 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-110.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_93)

    new_post_94 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-111.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_94)

    new_post_95 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-112.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_95)

    new_post_96 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-113.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_96)

    new_post_97 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-114.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_97)

    new_post_98 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-115.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_98)

    new_post_99 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-116.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_99)

    new_post_100 = Post(
        owner_id=10,
        album_id=10,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-117.jpg",
        description=fake.sentence(),
        created_at=date.today()
    )
    db.session.add(new_post_100)

    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
