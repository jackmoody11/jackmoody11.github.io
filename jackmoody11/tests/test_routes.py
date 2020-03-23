import pytest

from jackmoody11.app import create_app


@pytest.fixture()
def client():
    app = create_app()
    app.config['TESTING'] = True

    with app.test_client() as client:
        yield client


class TestRoutes:

    def test_get_home(self, client):
        response = client.get('/')
        assert response.status_code == 200

    def test_get_projects(self, client):
        response = client.get('/projects/')
        assert response.status_code == 200

    def test_get_euler_home(self, client):
        response = client.get('/euler/')
        assert response.status_code == 200

    def test_get_euler_p001_solution(self, client):
        response = client.get('/euler/solutions/p001/')
        assert response.status_code == 200

    def test_get_blog_home(self, client):
        response = client.get('/blog/')
        assert response.status_code == 200

    def test_404(self, client):
        response = client.get('/pagethatdoesntexist/')
        assert response.status_code == 404
