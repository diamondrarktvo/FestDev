from ampalibe import translate
from ampalibe.ui import QuickReply
from ampalibe import Messenger


chat = Messenger()


class PresentationView:
    def quick_reply_principal(self, lang):
        return [
            QuickReply(
                title=translate("sensibilisation", lang),
                image_url="https://img2.freepng.fr/20180620/bwy/kisspng-sticker-telegram-emoji-zazzle-0-cheetah-outreach-5b29e7acd87e12.6092512315294729408868.jpg",
                payload="/sensibilisation",
            ),
            QuickReply(
                title=translate("actualite", lang),
                image_url="https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg",
                payload="/actualite",
            ),
            QuickReply(
                title=translate("ramassage", lang),
                image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5wIDH8E5GHi5PsZ9x4rVA9G1sPAucykLB7F7Ksz21A&s",
                payload="/ramassage",
            ),
            QuickReply(
                title=translate("apk", lang),
                image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpGHTLLRDG0S0tqd-yBRK9CVASplufoRbTZ_n2Y1jSg&s",
                payload="/apk",
            ),
            QuickReply(
                title=translate("mon_espace", lang),
                image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhEqHk0K-JcCuV4Eyhu-8RfU7VUnAyXOYmSk33MY&s",
                payload="/my_space",
            ),
        ]

    def sensibilisation(self, sender_id, data):
        chat.send_template(sender_id, data)
