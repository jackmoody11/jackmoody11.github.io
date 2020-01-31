import json

from flask import Blueprint, render_template

bp = Blueprint('euler', __name__, static_folder='euler/static')


@bp.route('/euler/solutions/<number>/')
def show(number):
    return render_template('euler/solutions/{number}.html'.format(
            number=number), number=number)


@bp.route('/euler/')
def index():
    with bp.open_resource('static/json/euler_solutions.json') as f:
        _solutions = json.load(f)['solutions']
    return render_template('euler/base.html', solutions=_solutions)
