# Jay Cina
# 10/15/2024
# Desc: Store the tables that descripe the structure of data in our db
# Sources: https://www.youtube.com/watch?v=qSpFAgRrgqs&ab_channel=BrandonHarding

# Imports:
from . import db # . means current directory
from flask_login import UserMixin

# Learn some SQL to understand how to create tables!

# User table (THIS IS FROM THE VIDEO AND NOT CUSTOMIZED TO OUR PROJECT)
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    # used for debugging
    def __repr__(self):
        return '<User %r>' % self.username