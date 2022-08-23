import sqlite3
db = sqlite3.connect('db.sqlite')

db.execute('''CREATE TABLE record(
    id integer PRIMARY KEY,
    title text NOT NULL,
    duration text NOT NULL,
    genre text NOT NULL,
    price text NOT NULL,
    seat text NOT NULL,
    date text NOT NULL,
    time text NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''INSERT INTO record(title,duration,genre,price,seat,date,time) VALUES("Thor: Love and Thunder","118 m / 1 h 58 m","Superhero, Action","22.00","2","9/1","8.00am")''')
cursor.execute('''INSERT INTO record(title,duration,genre,price,seat,date,time) VALUES("One Piece Film: Red","115 m / 1 h 55 m","Anime, Action","20.00","1","9/5","4.00pm")''')
cursor.execute('''INSERT INTO record(title,duration,genre,price,seat,date,time) VALUES("One Piece Film: Red","115 m / 1 h 55 m","Anime, Action","40.00","2","9/5","4.00pm")''')


db.commit()
db.close()
