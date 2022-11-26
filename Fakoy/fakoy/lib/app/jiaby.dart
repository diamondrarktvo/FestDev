// ignore_for_file: unused_import

import 'dart:convert';
import 'dart:io';

import 'package:fakoy/models/map.model.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../models/user.model.dart';
import '../pages/widget/show_modal.dart';

class DataController {
  String baseUrl = "https://fakoy.e-commerce-mg.com";
  Future saveUserData(accesToken, userId) async {
    final preferences = await SharedPreferences.getInstance();

    await preferences.setString('accesToken', accesToken);
    await preferences.setInt('userId', userId);
  }

  Future saveUserInfo({
    required String firstName,
    required String lastName,
    required String quartier,
    required String username,
    required String accesToken,
    required String cin,
    required String qrCode,
    required String createdAt,
    required String updatedAt,
    required String fonction,
    required String phone,
    required int userId,
  }) async {
    final preferences = await SharedPreferences.getInstance();

    await preferences.setString('firstName', firstName);
    await preferences.setString('lastName', lastName);
    await preferences.setString('quartier', quartier);
    await preferences.setString('username', username);
    await preferences.setString('cin', cin);
    await preferences.setString('qrCode', qrCode);
    await preferences.setString('createdAt', createdAt);
    await preferences.setString('updatedAt', updatedAt);
    await preferences.setString('fonction', fonction);
    await preferences.setString('phone', phone);
    await preferences.setString('accesToken', accesToken);
    await preferences.setInt('userId', userId);
  }

  Future<User> getUserInfo() async {
    final preferences = await SharedPreferences.getInstance();

    final firstName = preferences.getString('firstName') ?? "firstName_vide";
    final lastName = preferences.getString('lastName') ?? "lastName_vide";
    final fonction = preferences.getString('fonction') ?? "fonction";
    final username = preferences.getString('accesToken') ?? "accesToken_vide";
    final qrCode = preferences.getString('qrCode') ?? "qrCode";
    final quartier = preferences.getString('quartier') ?? "quartier";
    final phone = preferences.getString('phone') ?? "phone";
    final cin = preferences.getString('cin') ?? "cin";
    return User(
      username: username,
      nom: firstName,
      prenom: lastName,
      fonction: fonction,
      qrCode: qrCode,
      quartier: quartier,
      cin: cin,
      phone: phone,
    );
  }

  /*Future<User> getUserData() async {
    final preferences = await SharedPreferences.getInstance();

    final accesToken = preferences.getString('accesToken') ?? "token_vide";
    final userId = preferences.getInt('userId') ?? 0;

    return User(userId: userId, token: accesToken);
  }*/

  deleteAllData() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    await preferences.clear();
    Get.offAllNamed('/signIn');
  }

  login({
    required String pseudo,
    required String mdp,
  }) async {
    String urlLogin = "$baseUrl/auth/auth-user";
    print(urlLogin);
    Map data = {'username': pseudo, 'password': mdp};

    final response = await http.post(Uri.parse(urlLogin),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data,
        encoding: Encoding.getByName("utf-8"));

    if (response.statusCode == 201 || response.statusCode == 200) {
      showMe("SUCCES!", "La connexion a bien été etablie !", Colors.green);

      var auth = User.fromJson(json.decode(response.body));
      return [
        await saveUserInfo(
          firstName: auth.nom!,
          lastName: auth.prenom!,
          quartier: auth.quartier!,
          username: auth.username!,
          accesToken: auth.accessToken!,
          cin: auth.cin!,
          qrCode: auth.qrCode!,
          createdAt: auth.createdAt!,
          updatedAt: auth.updatedAt!,
          fonction: auth.fonction!,
          phone: auth.phone!,
          userId: auth.id!,
        ),
        Get.offAllNamed('/home')
      ];
    } else if (response.statusCode == 400) {
      return showMe("ERREUR!", "Vos identifiants semble incorect!", Colors.red);
    } else {
      return showMe(
          "ERREUR", "VERIFIER VOTRE CONNEXION INTERNET !", Colors.orangeAccent);
    }
  }

  Future<List<MapCoordonate>> getMapCoordonnee() async {
    final data = await getUserInfo();
    String listeMap = "$baseUrl/place/all";

    final response = await http.get(
      Uri.parse(listeMap),
      headers: {HttpHeaders.authorizationHeader: 'Bearer ${data.accessToken}'},
    );
    if (response.statusCode == 401) {
      deleteAllData();
    }
    final items = json.decode(response.body).cast<Map<String, dynamic>>();

    List<MapCoordonate> positionLists = items.map<MapCoordonate>((json) {
      return MapCoordonate.fromJson(json);
    }).toList();

    return positionLists;
  }

  Future<List<MapCoordonate>> getHistory() async {
    final data = await getUserInfo();
    String listeMap = "$baseUrl/fako/utilisateur/${data.id}";

    final response = await http.get(
      Uri.parse(listeMap),
      headers: {HttpHeaders.authorizationHeader: 'Bearer ${data.accessToken}'},
    );
    if (response.statusCode == 401) {
      deleteAllData();
    }
    final items = json.decode(response.body).cast<Map<String, dynamic>>();

    List<MapCoordonate> positionLists = items.map<MapCoordonate>((json) {
      return MapCoordonate.fromJson(json);
    }).toList();

    return positionLists;
  }

  qualiteAir() async {
    var request = http.MultipartRequest(
      'GET',
      Uri.parse(
          'http://api.airvisual.com/v2/tananarive?key=6038d95e-f980-4c38-bb75-651cc0f4374c'),
    );

    http.StreamedResponse response = await request.send();

    if (response.statusCode == 200) {
      print(
        await response.stream.bytesToString(),
      );
    } else {
      print(response.reasonPhrase);
    }
  }
}
