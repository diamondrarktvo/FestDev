import requests


class PresentationModel:
    def __init__(self, url):
        self.url = url

    def get_content(
        self,
    ):
        response = requests.get(
            "https://newsapi.org/v2/everything?q=pollution&from=2022-11-25&to=2022-11-25&sortBy=popularity&apiKey=b9b089de381045bba7f132908e227262",
        )
        return response.json()

    def get_place(self):
        response = requests.get(f"{self.url}/place/all")
        return response.json()
