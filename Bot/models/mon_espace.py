import requests


class MySpaceModel:
    def __init__(self, url):
        self.url = url

    def login(self, username, password):
        response = requests.post(
            self.url + "/auth/auth-user",
            data={
                "username": username,
                "password": password,
            },
        )
        return response.json()

    def my_money(self, token):
        response = requests.get(
            self.url + "/fako/somme-argent",
            headers={
                "Authorization": "Bearer " + token,
            },
        )

        return response.json()
