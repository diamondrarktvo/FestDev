import ampalibe
from controllers import PresentationController

controller = PresentationController()


@ampalibe.command("/sensibilisation")
def sensibilisation(sender_id, **ext):
    controller.get_content(sender_id, t="sensibilisation")


@ampalibe.command("/actualite")
def actualites(sender_id, **ext):
    controller.get_content(sender_id, t="actualite")


@ampalibe.command("/apk")
def apk(sender_id, **ext):
    controller.apk(sender_id)


@ampalibe.command("/ramassage")
def ramassage(sender_id, **ext):
    controller.pick_up_point(sender_id)
