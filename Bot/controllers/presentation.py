from ampalibe import Payload
from ampalibe import translate
from conf import Configuration
from views import PresentationView
from models import PresentationModel
from ampalibe.ui import Element, Button, Type


view = PresentationView()
model = PresentationModel(Configuration.API_URL)


class PresentationController:
    def get_content(self, sender_id, t, lang):

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
                            title=translate("voir_contenu", lang),
                            payload=Payload("/voir", data=content["content"]),
                        )
                    ],
                )
            )
        return view.sensibilisation(sender_id, contents)

    def apk(self, sender_id):
        print("APK")

    def pick_up_point(self, sender_id):
        return view.pick_up_point(
            sender_id, [data["nom"] for data in model.get_place()]
        )
