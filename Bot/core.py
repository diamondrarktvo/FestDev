import ampalibe
from routes import *
from conf import Configuration
from views import PresentationView
from ampalibe.messenger import Action
from ampalibe import Messenger, Model
from ampalibe.messenger import Filetype
from ampalibe import simulate, translate
from views.lang import choix_lang, choix_success

query = Model()
chat = Messenger()
# create a get started option to get permission of user.
chat.get_started("/get_started")


@ampalibe.command("/get_started")
def get_started(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_file_url(
        sender_id,
        f"{Configuration.APP_URL}/asset/Logo_FAKOY.png",
        filetype=Filetype.image,
    )
    chat.send_message(sender_id, translate("intro", "fr"))
    simulate(sender_id, "/")


@ampalibe.command("/")
def main(sender_id, lang, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    if not lang:
        return choix_lang(sender_id)

    chat.send_quick_reply(
        sender_id,
        PresentationView().quick_reply_principal(lang),
        translate("quick_principal", lang),
    )


@ampalibe.command("/lang")
def set_lang(sender_id, new_lang, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    query.set_lang(sender_id, new_lang)
    return choix_success(sender_id, new_lang)
