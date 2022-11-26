from ampalibe import translate
from ampalibe.ui import Button, Type


def persistentu_first(lang):
    return [
        Button(
            type=Type.postback,
            title=translate("sensibilisation", lang),
            payload="/sensibilisation",
        ),
        Button(
            type=Type.postback, title=translate("actualite", lang), payload="/actualite"
        ),
        Button(
            type=Type.postback, title=translate("ramassage", lang), payload="/ramassage"
        ),
        Button(
            type=Type.postback, title=translate("mon_espace", lang), payload="/my_space"
        ),
        Button(type=Type.postback, title=translate("apk", lang), payload="/apk"),
    ]


def persistent_menu_connect(lang):
    return [
        Button(
            type=Type.postback,
            title=translate("sensibilisation", lang),
            payload="/sensibilisation",
        ),
        Button(
            type=Type.postback, title=translate("actualite", lang), payload="/actualite"
        ),
        Button(
            type=Type.postback, title=translate("ramassage", lang), payload="/ramassage"
        ),
        Button(type=Type.postback, title=translate("mon_qr", lang), payload="/my_qr"),
        Button(
            type=Type.postback,
            title=translate("mon_argent", lang),
            payload="/mon_argent",
        ),
        Button(
            type=Type.postback,
            title=translate("deconnexion", lang),
            payload="/deconnexion",
        ),
    ]
