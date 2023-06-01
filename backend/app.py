
from flask import Flask

api = Flask(__name__)



@api.route('/')
def my_home():
    return "you are in home"


@api.route('/profile')
def my_profile():
    response_profile =  {
        "name": "ray",
        "about": "I am ray cop."
        }
    return response_profile  

