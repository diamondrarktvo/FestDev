from conf import Configuration
from ampalibe.ui import Element, Button, Type
from models import PresentationModel
from ampalibe import Payload
from views import PresentationView


view = PresentationView()
model = PresentationModel(Configuration.API_URL)


class PresentationController:
    def get_content(self, sender_id, t):

        data = (
            model.get_content()["articles"][:10]
            if t == "sensibilisation"
            else model.get_content()["articles"][10:20]
        )

        contents = []
        for content in data:
            contents.append(
                Element(
                    title=" ".join(content["title"].split(" ")[:3]) + "...",
                    subtitle=f"Ecrit par: {content['author']}\nLe: {content['publishedAt']}\nSource: {content['source']['name']}",
                    image_url=content["urlToImage"],
                    buttons=[
                        Button(
                            type=Type.postback,
                            title="Voir les contenus",
                            payload=Payload("/voir", data=content["content"]),
                        )
                    ],
                )
            )
        return view.sensibilisation(sender_id, contents)

    def apk(self, sender_id):
        print("APK")

    def pick_up_point(self, sender_id):
        print("Point de ramassage")
