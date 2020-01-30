import datetime
import os

from flask import Blueprint, render_template, current_app
from flask_flatpages import FlatPages

blog = Blueprint('blog', __name__, template_folder='templates/blog', static_folder='static')


def _ensure_datetime(val):
    """Ensure ``val`` is a datetime.datetime object, converting it
    from a datetime.date if necessary.
    """
    if isinstance(val, datetime.date):
        ret = datetime.datetime.combine(val, datetime.datetime.min.time())
    elif isinstance(val, datetime.datetime):
        ret = val
    else:
        raise ValueError('Could not convert {} to a datetime.datetime')
    return ret


@blog.route('/<path:path>/')
def show(path):
    pages = FlatPages(current_app)
    page = pages.get_or_404(path)
    return render_template('post.html', page=page)


@blog.route('/blog/')
def index():
    def sort_key(page):
        return _ensure_datetime(page.meta['updated'])

    pages = FlatPages(current_app)

    pages_sorted = [page for page in sorted(pages,
                                            reverse=True,
                                            key=sort_key)]
    return render_template('blog/base.html', pages=pages_sorted)
