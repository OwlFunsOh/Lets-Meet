# Jay Cina
# 10/15/2024
# Desc: Config for our web app database
# Sources: https://www.youtube.com/watch?v=qSpFAgRrgqs&ab_channel=BrandonHarding

# Imports:
from flask import Flask, request, jsonify, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, current_user
import logging
import os

# Initializing database and login manager
db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)

    # depends on your MYSQL "Hostname"
    app.config['MYSQL_HOST'] = '127.0.0.1'
    # depends on your MYSQL "Username"
    app.config['MYSQL_USER'] = 'root'
    # stored in .env
    app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
    # database name in MYSQL Workbench
    app.config['MYSQL_DB'] = 'letsmeet_db'

    db.init_app(app)

    with app.app_context():
        from .models import User

        db.create_all()

        return app;