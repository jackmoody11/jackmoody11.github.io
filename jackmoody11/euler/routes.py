import json
import os

from flask import Blueprint, render_template

euler_directory = os.path.dirname(os.path.abspath(__file__))
template_directory = os.path.join(euler_directory, 'templates')
euler = Blueprint('euler', __name__, template_folder=template_directory)


@euler.route('/euler/solutions/<number>/')
def show(number):
    return render_template('euler/solutions/{number}.html'.format(
            number=number), number=number)


@euler.route('/euler/')
def index():
    with open('jackmoody11/static/json/euler_solutions.json') as f:
        _solutions = json.load(f)['solutions']
    return render_template('euler/base.html', solutions=_solutions)
