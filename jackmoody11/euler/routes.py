import json

from flask import Blueprint, render_template

euler = Blueprint('euler', __name__, template_folder='templates/euler', static_folder='static')


@euler.route('/euler/solutions/<number>/')
def show(number):
    return render_template('solutions/{number}.html'.format(
            number=number), number=number)


@euler.route('/euler/')
def index():
    with euler.open_resource('static/json/euler_solutions.json') as f:
        _solutions = json.load(f)['solutions']
    return render_template('base.html', solutions=_solutions)
