import ampalibe
from ampalibe import translate
from ampalibe.messenger import Action
from ampalibe import Messenger, Model
from ampalibe.messenger import Filetype
from controllers import MySpaceController
from conf import Configuration


query = Model()
chat = Messenger()
controller = MySpaceController()


@ampalibe.command("/my_space")
def mon_espace(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    if query.get_temp(sender_id, "token"):
        return controller.already_connected(sender_id, ext["lang"])
    controller.start_my_space(sender_id, ext["lang"])


@ampalibe.command("/my_space/connect")
def mon_espace_connect(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_message(sender_id, translate("request_login_username", ext["lang"]))
    query.set_action(sender_id, "/pending_login_username")


@ampalibe.action("/pending_login_username")
def pending_login_username(sender_id, cmd, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_message(sender_id, translate("request_login_password", ext["lang"]))
    query.set_temp(sender_id, "username", cmd.strip())
    query.set_action(sender_id, "/pending_login_password")


@ampalibe.action("/pending_login_password")
def pending_login_password(sender_id, cmd, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.login(sender_id, cmd, ext["lang"])
    
@ampalibe.command("/my_space/mon_qr")
def mon_espace_mo_qr(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_message(sender_id, translate("msg_qr", ext["lang"]))
    chat.send_file_url(
        sender_id,
        f"{Configuration.API_URL}/{query.get_temp(sender_id, 'qr')}",
        filetype=Filetype.image,
    )


@ampalibe.command("/my_space/my_argent")
def mon_espace_my_argent(sender_id, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    controller.my_money(sender_id, ext["lang"])
