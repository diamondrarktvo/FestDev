from ampalibe import Model
from views import MySpaceView
from conf import Configuration
from ampalibe import translate
from models import MySpaceModel
from ampalibe.ui import QuickReply


query = Model()
view = MySpaceView()
model = MySpaceModel(Configuration.API_URL)


class MySpaceController:
    def start_my_space(self, sender_id, lang):
        quick = [
            QuickReply(
                title=translate("connect", lang),
                image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccDPVst2XafaB2THDC_9fCbjC4eFHIk1Pzxxeq3W4&s",
                payload="/my_space/connect",
            ),
            QuickReply(
                title=translate("register", lang),
                image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0C6GPmHU0vzCDZV0l1_Bl5RSkFqYVjwLWvDjw6zhq&s",
                payload="/my_space/register",
            ),
        ]
        return view.my_space(sender_id, quick, lang)

    def login(self, sender_id, password, lang):
        response = model.login(query.get_temp(sender_id, "username"), password)
        query.set_action(sender_id, None)
        query.del_temp(sender_id, "username")
        if response["statusCode"] == 200:
            query.set_temp(sender_id, "token", response["access_token"])
            query.set_temp(sender_id, "qr", response["path_qr_code"])
            return view.login_success(
                sender_id,
                response,
                lang,
            )
        else:
            return view.login_failed(sender_id, lang)

    def already_connected(self, sender_id, lang):
        return view.already_connected(sender_id, lang)

    def my_money(self, sender_id, lang):
        response = model.my_money(query.get_temp(sender_id, "token"))
        return view.my_money(sender_id, response["somme_argent"], lang)
