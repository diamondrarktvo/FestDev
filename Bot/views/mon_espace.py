import ampalibe
from ampalibe import translate, simulate
from ampalibe import Messenger, Model
from .persistent_menu import persistent_menu_connect

query = Model()
chat = Messenger()


class MySpaceView:
    def my_space(self, sender_id, data, lang):
        chat.send_quick_reply(sender_id, data, translate("start_my_space", lang))

    def login_success(self, sender_id, data, quick, lang):
        # Asina sary ra misy ftoana
        chat.send_message(
            sender_id, translate("bienvenu", lang) + f"{data['nom']} {data['prenom']}"
        )
        chat.send_quick_reply(sender_id, quick, translate("tienne", lang))
        chat.persistent_menu(sender_id, persistent_menu_connect(lang))

    def login_failed(self, sender_id, lang):
        chat.send_message(sender_id, translate("login_failed", lang))
        simulate(sender_id, "/my_space/connect")
