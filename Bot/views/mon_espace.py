import ampalibe
from ampalibe.ui import QuickReply
from ampalibe import Messenger, Model
from ampalibe import translate, simulate
from .persistent_menu import persistent_menu_connect

query = Model()
chat = Messenger()


class MySpaceView:
    def my_space(self, sender_id, data, lang):
        chat.send_quick_reply(sender_id, data, translate("start_my_space", lang))

    def login_success(self, sender_id, data, lang):
        # Asina sary ra misy ftoana
        if isinstance(data, dict):
            chat.send_message(
                sender_id,
                translate("bienvenu", lang) + " "
                f"{data['nom'].upper()} {data['prenom']}",
            )

        chat.send_quick_reply(
            sender_id,
            {
                QuickReply(
                    title=translate("mon_qr", lang),
                    image_url="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC",
                    payload="/my_space/mon_qr",
                ),
                QuickReply(
                    title=translate("mon_argent", lang),
                    image_url="https://upload.wikimedia.org/wikipedia/commons/0/09/50_USD_Series_2004_Note_Front.jpg",
                    payload="/my_space/my_argent",
                ),
            },
            translate("tienne", lang),
        )
        chat.persistent_menu(sender_id, persistent_menu_connect(lang))

    def login_failed(self, sender_id, lang):
        chat.send_message(sender_id, translate("login_failed", lang))
        simulate(sender_id, "/my_space/connect")

    def already_connected(self, sender_id, lang):
        self.login_success(sender_id, "string", lang)

    def my_money(self, sender_id, data, lang):
        money = str(data) if data != None else "0"
        chat.send_message(
            sender_id,
            translate("mon_argent_actuel", lang) + " " + money + " " + "f-Ar",
        )
