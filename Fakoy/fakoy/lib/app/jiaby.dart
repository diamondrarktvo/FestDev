// ignore_for_file: unused_import

import 'dart:convert';

import 'package:http/http.dart' as http;

import '../pages/widget/show_modal.dart';

String baseUrl = "";

class DataController {
  /*login(pseudo, mdp) async {
    String urlLogin = baseUrl + "/auth/login";
    Map data = {'email': pseudo, 'password': mdp};

    final response = await http.post(Uri.parse(urlLogin),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data,
        encoding: Encoding.getByName("utf-8"));

    if (response.statusCode == 201 || response.statusCode == 200) {
      showMe("SUCCES!", "La connexion a bien été etablie !", Colors.green);

      var auth = LoginData.fromJson(json.decode(response.body));
      return [
        await dataController.saveUserData(auth.token, auth.userId),
        await getUserInfo(),
        Get.toNamed('/home')
      ];
    } else if (response.statusCode == 400) {
      return showMe("ERREUR!", "Vos identifiants semble incorect!", Colors.red);
    } else {
      return showMe(
          "ERREUR", "VERIFIER VOTRE CONNEXION INTERNET !", Colors.orangeAccent);
    }
  }*/

  qualiteAir() async {
    var request = http.MultipartRequest(
        'GET',
        Uri.parse(
            'http://api.airvisual.com/v2/tananarive?key=6038d95e-f980-4c38-bb75-651cc0f4374c'),);

    http.StreamedResponse response = await request.send();

    if (response.statusCode == 200) {
      print(await response.stream.bytesToString(),);
    } else {
      print(response.reasonPhrase);
    }
  }
}
