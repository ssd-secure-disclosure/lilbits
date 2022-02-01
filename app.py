# Importing the required from the flask module.
from flask import Flask, render_template, request

# Creating our Flask app
app = Flask(__name__)


# The root route will send the index.html page to the user
@app.route("/")
def index():
    return render_template('index.html')


# The '/calculate' endpoint will evaluate the equation sent by the user and forward the result as a string.
@app.route("/calculate")
def calculate():
    return str(eval(request.args.get('payload')))
