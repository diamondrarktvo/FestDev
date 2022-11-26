import ampalibe
from ampalibe import Payload
from ampalibe import simulate
from ampalibe import translate
from ampalibe.ui import QuickReply
from ampalibe import Messenger, Model

query = Model()
chat = Messenger()


def choix_lang(sender_id):
    quick_rep = [
        QuickReply(title="FR 🇫🇷", payload=Payload("/lang", new_lang="fr")),
        QuickReply(title="EN 🇬🇧", payload=Payload("/lang", new_lang="en")),
        QuickReply(title="MG 🇲🇬", payload=Payload("/lang", new_lang="mg")),
    ]
    chat.send_quick_reply(sender_id, quick_rep, "Choisissez votre langue")


def choix_success(sender_id, lang):
    chat.send_message(sender_id, translate("langue_mis_a_jour", lang) + " ✔")
    simulate(sender_id, "OK")