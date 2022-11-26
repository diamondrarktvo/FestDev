import ampalibe
from views import PresentationView

presentation = PresentationView()

@ampalibe.command("/get_started")
def get_started(sender_id, **ext):
    presentation.get_started(sender_id)