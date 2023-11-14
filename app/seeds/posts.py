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
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_1)

    new_post_2 = Post(
        owner_id=1,
        album_id=1,
        title="Road to the Mountains",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-02.jpg",
        description="Mountain ranges.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_2)

    new_post_3 = Post(
        owner_id=1,
        album_id=1,
        title="Dock",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-05.jpg",
        description="My family's lake house.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_3)

    new_post_4 = Post(
        owner_id=1,
        album_id=1,
        title="Creek",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-07.jpg",
        description="Landscape behind my ranch.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_4)

    new_post_5 = Post(
        owner_id=1,
        album_id=1,
        title="The Bay",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-08.jpg",
        description="The gates to adventure.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_5)

    new_post_6 = Post(
        owner_id=1,
        album_id=1,
        title="River Meets Ocean",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-10.jpg",
        description="The edge of the continent.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_6)

    new_post_7 = Post(
        owner_id=1,
        album_id=1,
        title="Purple Haze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-12.jpg",
        description="Welcome to the jungle :).",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_7)

    new_post_8 = Post(
        owner_id=1,
        album_id=1,
        title="A Chance Encounter",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-13.jpg",
        description="Love at the lake.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_8)

    new_post_9 = Post(
        owner_id=1,
        album_id=1,
        title="Seaside Escape",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-15.jpg",
        description="A photo captured on a summer walk...",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_9)

    new_post_10 = Post(
        owner_id=1,
        album_id=1,
        title="Shine On",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-18.jpg",
        description="A walk in the hills with plenty of thrills.",
        tag="nature",
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
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_11)

    new_post_12 = Post(
        owner_id=2,
        album_id=2,
        title="Light in the Trees",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-21.jpg",
        description="A memory I won't forget.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_12)

    new_post_13 = Post(
        owner_id=2,
        album_id=2,
        title="The Giant",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-22.jpg",
        description="The foot of a tree.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_13)

    new_post_14 = Post(
        owner_id=2,
        album_id=2,
        title="Shroomz",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-23.jpg",
        description="Sunset amongst the trees with plenty of fungi.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_14)

    new_post_15 = Post(
        owner_id=2,
        album_id=2,
        title="Outlook",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-24.jpg",
        description="A nice clear view of the forrest",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_15)

    new_post_16 = Post(
        owner_id=2,
        album_id=2,
        title="Thinking About Life",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-25.jpg",
        description="Caught in deep thought.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_16)

    new_post_17 = Post(
        owner_id=2,
        album_id=2,
        title="Lady of the Woods",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-28.jpg",
        description="Sitting on a tree.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_17)

    new_post_18 = Post(
        owner_id=2,
        album_id=2,
        title="Waterfall",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-29.jpg",
        description="Brazil has beautiful waterfalls.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_18)

    new_post_19 = Post(
        owner_id=2,
        album_id=2,
        title="Sun Sneaking In",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-27.jpg",
        description="A weekend at the meadows is good for the soul.",
        tag="nature",
        created_at=date.today()
    )
    db.session.add(new_post_19)

    new_post_20 = Post(
        owner_id=2,
        album_id=2,
        title="Skyview",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-26.jpg",
        description="A skyview of the woods.",
        tag="nature",
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
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_21)

    new_post_22 = Post(
        owner_id=3,
        album_id=3,
        title="Hey DJ",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-32.jpg",
        description="Spin that record...",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_22)

    new_post_23 = Post(
        owner_id=3,
        album_id=3,
        title=fake.sentence(),
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-33.jpg",
        description=fake.sentence(),
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_23)

    new_post_24 = Post(
        owner_id=3,
        album_id=3,
        title="Looking Up",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-41.jpg",
        description="My trip to Times Square.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_24)

    new_post_25 = Post(
        owner_id=3,
        album_id=3,
        title="Saturdaze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-35.jpg",
        description="The club last weekend was great!",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_25)

    new_post_26 = Post(
        owner_id=3,
        album_id=3,
        title="New Years 2022",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-36.jpg",
        description="A night I will never forget. Party on!!!",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_26)

    new_post_27 = Post(
        owner_id=3,
        album_id=3,
        title="Best Friendz",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-37.jpg",
        description="I love you Amanda!!!",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_27)

    new_post_28 = Post(
        owner_id=3,
        album_id=3,
        title="Bottle Service",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-38.jpg",
        description="VVVVVEEEEGGGGAAAASSSSS!!!!",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_28)

    new_post_29 = Post(
        owner_id=3,
        album_id=3,
        title="Makeup Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-39.jpg",
        description="Backstage access before my show. Behind the scenes.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_29)

    new_post_30 = Post(
        owner_id=3,
        album_id=3,
        title="Up is Down",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-40.jpg",
        description="A walk on my last trip!",
        tag="events",
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
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_31)

    new_post_32 = Post(
        owner_id=4,
        album_id=4,
        title="Cheezecake",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-43.jpg",
        description="A nice treat!",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_32)

    new_post_33 = Post(
        owner_id=4,
        album_id=4,
        title="Waffle House",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-44.jpg",
        description="Fall assortment of delicious yummiez.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_33)

    new_post_34 = Post(
        owner_id=4,
        album_id=4,
        title="English Breakfast",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-45.jpg",
        description="Made with love for the love of my life.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_34)

    new_post_35 = Post(
        owner_id=4,
        album_id=4,
        title="Tea Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-46.jpg",
        description="Two loves sharing a moment over tea.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_35)

    new_post_36 = Post(
        owner_id=4,
        album_id=4,
        title="Squeeze",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-47.jpg",
        description="Every little detail caught in a moment before a meal.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_36)

    new_post_37 = Post(
        owner_id=4,
        album_id=4,
        title="Cake Time",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-48.jpg",
        description="Birthday cake made for Tristan.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_37)

    new_post_38 = Post(
        owner_id=4,
        album_id=4,
        title="Drizzle Dance",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-49.jpg",
        description="Waffles or pancakes?",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_38)

    new_post_39 = Post(
        owner_id=4,
        album_id=4,
        title="Taste Test",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-50.jpg",
        description="A photo that hits most of the senses.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_39)

    new_post_40 = Post(
        owner_id=4,
        album_id=4,
        title="Lunch For Two",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-51.jpg",
        description="A beautiful lunch in Downtown.",
        tag="food",
        created_at=date.today()
    )
    db.session.add(new_post_40)

    ######################### 5 #########################

    new_post_41 = Post(
        owner_id=5,
        album_id=5,
        title="Rush Hour",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-53.jpg",
        description="So many stories, captured in one photo.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_41)

    new_post_42 = Post(
        owner_id=5,
        album_id=6,
        title="Time Square Rush Hour",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-54.jpg",
        description="A gloomy day in New York.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_42)

    new_post_43 = Post(
        owner_id=5,
        album_id=6,
        title="Alleyway",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-55.jpg",
        description="The view from the alley.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_43)

    new_post_44 = Post(
        owner_id=5,
        album_id=6,
        title="View through my lens.",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-56.jpg",
        description="Traffic from above.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_44)

    new_post_45 = Post(
        owner_id=5,
        album_id=6,
        title="What You Want?",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-57.jpg",
        description="Waiting for something.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_45)

    new_post_46 = Post(
        owner_id=5,
        album_id=6,
        title="Abstract Street",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-58.jpg",
        description="I loved the way this photo turned out.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_46)

    new_post_47 = Post(
        owner_id=5,
        album_id=6,
        title="Street Veggies",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-59.jpg",
        description="A day on the street.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_47)

    new_post_48 = Post(
        owner_id=5,
        album_id=6,
        title="Fashion Add",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-60.jpg",
        description="Shot by me.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_48)

    new_post_49 = Post(
        owner_id=5,
        album_id=6,
        title="Main Street",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-61.jpg",
        description="The city center with love.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_49)

    new_post_50 = Post(
        owner_id=5,
        album_id=6,
        title="Ballet",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-62.jpg",
        description="Strike a pose, on your toes.",
        tag="city",
        created_at=date.today()
    )
    db.session.add(new_post_50)

    ######################### 6 #########################

    new_post_51 = Post(
        owner_id=6,
        album_id=6,
        title="On the Ledge",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-63.jpg",
        description="Taking a seat on the edge of downtown.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_51)

    new_post_52 = Post(
        owner_id=6,
        album_id=6,
        title="Eye For an Eye",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-64.jpg",
        description="Inception",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_52)

    new_post_53 = Post(
        owner_id=6,
        album_id=6,
        title="Family Portrait",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-65.jpg",
        description="Merry Christmas",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_53)

    new_post_54 = Post(
        owner_id=6,
        album_id=6,
        title="Drip",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-66.jpg",
        description="Checkout my kicks",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_54)

    new_post_55 = Post(
        owner_id=6,
        album_id=6,
        title="Having Fun",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-67.jpg",
        description="Kids will be kids.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_55)

    new_post_56 = Post(
        owner_id=6,
        album_id=6,
        title="Strike a Pose",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-68.jpg",
        description="Dress to impress.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_56)

    new_post_57 = Post(
        owner_id=6,
        album_id=6,
        title="March On",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-69.jpg",
        description="Fight for what you believe in.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_57)

    new_post_58 = Post(
        owner_id=6,
        album_id=6,
        title="A Mother's Love",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-70.jpg",
        description="Smile for the camera.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_58)

    new_post_59 = Post(
        owner_id=6,
        album_id=6,
        title="Friends",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-71.jpg",
        description="The band is back together.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_59)

    new_post_60 = Post(
        owner_id=6,
        album_id=6,
        title="Let the Good Times Roll",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-72.jpg",
        description="Zara her collection.",
        tag="people",
        created_at=date.today()
    )
    db.session.add(new_post_60)

    ######################### 7 #########################

    new_post_61 = Post(
        owner_id=7,
        album_id=7,
        title="Celebrate Life",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-74.jpg",
        description="Color festival!",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_61)

    new_post_62 = Post(
        owner_id=7,
        album_id=7,
        title="Dragon",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-75.jpg",
        description="Year of the Dragon.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_62)

    new_post_63 = Post(
        owner_id=7,
        album_id=7,
        title="The Light",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-76.jpg",
        description="Follow the light.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_63)

    new_post_64 = Post(
        owner_id=7,
        album_id=7,
        title="After the Dance",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-77.jpg",
        description="We stayed till after the last song.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_64)

    new_post_65 = Post(
        owner_id=7,
        album_id=7,
        title="Epic",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-78.jpg",
        description="The festivals of festivals.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_65)

    new_post_66 = Post(
        owner_id=7,
        album_id=7,
        title="Rock On",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-79.jpg",
        description="Family fun at the festival.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_66)

    new_post_67 = Post(
        owner_id=7,
        album_id=7,
        title="Golden Hour Festival",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-80.jpg",
        description="In the crowd.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_67)

    new_post_68 = Post(
        owner_id=7,
        album_id=7,
        title="EDC",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-81.jpg",
        description="All the electric lights.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_68)

    new_post_69 = Post(
        owner_id=7,
        album_id=7,
        title="Proud",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-82.jpg",
        description="Best new friends.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_69)

    new_post_70 = Post(
        owner_id=7,
        album_id=7,
        title="Fireworks",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-84.jpg",
        description="The show above the show.",
        tag="events",
        created_at=date.today()
    )
    db.session.add(new_post_70)

    ######################### 8 #########################

    new_post_71 = Post(
        owner_id=8,
        album_id=8,
        title="The Stare",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-85.jpg",
        description="Focus on the focus.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_71)

    new_post_72 = Post(
        owner_id=8,
        album_id=8,
        title="Hunting",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-86.jpg",
        description="Sneaking up on the camera.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_72)

    new_post_73 = Post(
        owner_id=8,
        album_id=8,
        title="Naptime",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-87.jpg",
        description="Sleeping on the table.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_73)

    new_post_74 = Post(
        owner_id=8,
        album_id=8,
        title="On the Rail",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-88.jpg",
        description="Resting on the edge.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_74)

    new_post_75 = Post(
        owner_id=8,
        album_id=8,
        title="Peek-a-boo",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-89.jpg",
        description="Who's finding who?",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_75)

    new_post_76 = Post(
        owner_id=8,
        album_id=8,
        title="Snowplay",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-90.jpg",
        description="Frolicing near the snow.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_76)

    new_post_77 = Post(
        owner_id=8,
        album_id=8,
        title="Staring Contest",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-91.jpg",
        description="Who do you think will win?",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_77)

    new_post_78 = Post(
        owner_id=8,
        album_id=8,
        title="Playtime",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-92.jpg",
        description="Running through the grass.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_78)

    new_post_79 = Post(
        owner_id=8,
        album_id=8,
        title="Autumn",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-93.jpg",
        description="Cat laying on the floor.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_79)

    new_post_80 = Post(
        owner_id=8,
        album_id=8,
        title="Up is Down",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-95.jpg",
        description="Upside down cat...so cute!!",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_80)

    ######################### 9 #########################

    new_post_81 = Post(
        owner_id=9,
        album_id=9,
        title="Fall Doggo",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-096.jpg",
        description="Laying in the leaves.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_81)

    new_post_82 = Post(
        owner_id=9,
        album_id=9,
        title="River Dog",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-097.jpg",
        description="A day at the river.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_82)

    new_post_83 = Post(
        owner_id=9,
        album_id=9,
        title="Puppy",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-098.jpg",
        description="Puppy... that's the description.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_83)

    new_post_84 = Post(
        owner_id=9,
        album_id=9,
        title="Hey There",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-099.jpg",
        description="A good boy being a good boy.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_84)

    new_post_85 = Post(
        owner_id=9,
        album_id=9,
        title="King of the Hill",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-100.jpg",
        description="What do you see?",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_85)

    new_post_86 = Post(
        owner_id=9,
        album_id=9,
        title="Purple Doggo",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-101.jpg",
        description="Lavender Dog",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_86)

    new_post_87 = Post(
        owner_id=9,
        album_id=9,
        title="Fly Away",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-102.jpg",
        description="Chasing birds.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_87)

    new_post_88 = Post(
        owner_id=9,
        album_id=9,
        title="Bandana",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-103.jpg",
        description="Why did we stop?",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_88)

    new_post_89 = Post(
        owner_id=9,
        album_id=9,
        title="Beach Day",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-104.jpg",
        description="Playing in the water.",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_89)

    new_post_90 = Post(
        owner_id=9,
        album_id=9,
        title="Beach Doggo",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-106.jpg",
        description="Can I go play with my friends?",
        tag="animals",
        created_at=date.today()
    )
    db.session.add(new_post_90)

    ######################### 10 #########################

    new_post_91 = Post(
        owner_id=10,
        album_id=10,
        title="The City Lights",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-108.jpg",
        description="The night adventures.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_91)

    new_post_92 = Post(
        owner_id=10,
        album_id=10,
        title="The Bridge",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-109.jpg",
        description="I know you've seen this one in movies.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_92)

    new_post_93 = Post(
        owner_id=10,
        album_id=10,
        title="Traffic",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-110.jpg",
        description="Speeding by.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_93)

    new_post_94 = Post(
        owner_id=10,
        album_id=10,
        title="Zoom Zoom",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-111.jpg",
        description="Life is one big path.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_94)

    new_post_95 = Post(
        owner_id=10,
        album_id=10,
        title="Skyline",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-112.jpg",
        description="Skyscrapers at night.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_95)

    new_post_96 = Post(
        owner_id=10,
        album_id=10,
        title="Past or Present",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-113.jpg",
        description="Welcome to my world.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_96)

    new_post_97 = Post(
        owner_id=10,
        album_id=10,
        title="Where To?",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-114.jpg",
        description="So many ways to get to the same place.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_97)

    new_post_98 = Post(
        owner_id=10,
        album_id=10,
        title="Drive",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-115.jpg",
        description="All I want to do is drive home to you.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_98)

    new_post_99 = Post(
        owner_id=10,
        album_id=10,
        title="The Port",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-116.jpg",
        description="The city from out there.",
        tag="art",
        created_at=date.today()
    )
    db.session.add(new_post_99)

    new_post_100 = Post(
        owner_id=10,
        album_id=10,
        title="Blurred Lines",
        photo_url="https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-117.jpg",
        description="Ready, Set, Go!",
        tag="art",
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
