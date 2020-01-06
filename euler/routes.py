from flask import Blueprint, render_template

euler = Blueprint('euler', __name__)


@euler.route('/euler/solutions/<number>')
def show(number):
    return render_template('euler/solutions/{number}.html'.format(number=number))


@euler.route('/euler')
def index():
    return render_template('euler/base.html')
