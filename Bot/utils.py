import os
import speech_recognition
from fnmatch import fnmatch

rec = speech_recognition.Recognizer()


def speech2text(audio):
    with speech_recognition.AudioFile(audio) as source:
        audio_data = rec.record(source)
        text = rec.recognize_google(audio_data, language="fr")
    return text


def split_file(path, file, size_file=24000):
    """
    Fonction pour diviser un fichier compressé par taille.
    @path: path du fichier
    @file: nom du fichier
    @size_file Taille du separation en M
    @files: list retourner contanant les fichiers divisés.
    """
    size_file = round(size_file / 1024)
    path += "" if path.endswith("/") else "/"

    files = []
    # compression du fichier
    os.system(f"cd {path} && 7z -v{size_file}m a {file}.7z {file}")
    # recupere tous les fichiers crées
    ls_zip = os.listdir(path)
    # trier par nom
    ls_zip.sort()
    for ls in ls_zip:
        if fnmatch(ls, f"{file}.7z.0*"):
            files.append(ls)
    return files
