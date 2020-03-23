import datetime as dt

from flask import Blueprint, render_template
from flask_flatpages import FlatPages

bp = Blueprint('blog', __name__, static_folder='static')
blog_pages = FlatPages()

EXCLUDE_PAGES = ["README", "template"]


def _ensure_datetime(val):
    """Ensure ``val`` is a datetime.datetime object, converting it
    from a datetime.date if necessary.
    """
    if isinstance(val, dt.date):
        ret = dt.datetime.combine(val, dt.datetime.min.time())
    elif isinstance(val, dt.datetime):
        ret = val
    else:
        raise ValueError('Could not convert {} to a datetime.datetime')
    return ret


def _sort_by_updated(pages):
    """Returns a list of pages sorted by the "updated" field.
    Exludes any of the pages in EXCLUDE_PAGES.
    """

    def sort_key(page):
        return _ensure_datetime(page.meta['published'])

    return [page for page in sorted(pages,
                                    reverse=True,
                                    key=sort_key)
            if page.path not in EXCLUDE_PAGES]


@bp.route('/blog/<path:path>/')
def show(path):
    p = blog_pages.get_or_404(path)
    return render_template('blog/post.html',
                           page=p)


@bp.route('/blog/')
def index():
    all_pages = [p for p in blog_pages if p.path not in EXCLUDE_PAGES]
    pages_sorted = _sort_by_updated(all_pages)
    return render_template('blog/base.html', pages=pages_sorted)


@bp.route('/tag/<string:t>')
def tag(t):
    filtered = [p for p in blog_pages if t in p.meta.get('tags', [])]
    latest = _sort_by_updated(filtered)
    return latest
