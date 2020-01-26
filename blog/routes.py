import os

from flask import Blueprint, render_template

blog_directory = os.path.dirname(os.path.abspath(__file__))
template_directory = os.path.join(blog_directory, 'templates')
blog = Blueprint('blog', __name__, template_folder=template_directory)


# @blog.route('/<page>/')
# def show(page):
#     return render_template('/blog/{page}.html'.format(page=page))


@blog.route('/blog/')
def index():
    return render_template('blog/base.html')
