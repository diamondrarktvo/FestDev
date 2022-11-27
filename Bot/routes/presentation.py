import ampalibe
from ampalibe import Messenger, Model
from ampalibe.messenger import Action
from ampalibe import translate, simulate
from controllers import PresentationController
from views.persistent_menu import persistentu_first

query = Model()
chat = Messenger()
controller = PresentationController()


@ampalibe.command("/sensibilisation")
def sensibilisation(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.get_content(sender_id, t="sensibilisation", lang=ext["lang"])


@ampalibe.command("/actualite")
def actualites(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.get_content(sender_id, t="actualite", lang=ext["lang"])


@ampalibe.command("/apk")
def apk(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.apk(sender_id)


@ampalibe.command("/ramassage")
def ramassage(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.pick_up_point(sender_id)


@ampalibe.command("/voir")
def voir(sender_id, data, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_message(sender_id, data)


@ampalibe.command("/deconnexion")
def deconnexion(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    query.del_temp(sender_id, "token")
    query.del_temp(sender_id, "qr")
    query.set_lang(sender_id, None)
    chat.persistent_menu(sender_id, persistentu_first("fr"))
    chat.send_message(sender_id, translate("deconnexion_f", ext["lang"]))


@ampalibe.command("/ramassage")
def pick_up_point(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.pick_up_point(sender_id)
