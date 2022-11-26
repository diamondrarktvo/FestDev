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
