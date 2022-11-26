import 'dart:io';

import 'package:fakoy/pages/compte.dart';
import 'package:fakoy/pages/home.dart';
import 'package:fakoy/pages/map.dart';
import 'package:fakoy/pages/sign_up.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'pages/intro.dart';
import 'pages/sign_in.dart';
import 'pages/widget/drawer.dart';

class MyHttpOverrides extends HttpOverrides {
  @override
  HttpClient createHttpClient(SecurityContext? context) {
    return super.createHttpClient(context)
      ..badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
  }
}

void main() {
  HttpOverrides.global = MyHttpOverrides();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'FAKOY',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Caviar',
      ),
      initialRoute: '/userProfile',
      routes: {
        '/': (context) => const HomePage(),
        '/signUp': (context) => const SignUpPage(),
        '/signIn': (context) => const SignInPage(),
        '/home': (context) => const PageAcceuil(),
        '/drawer': (context) => const CustomDrawer(),
        '/map': (context) => const CartePage(),
        '/userProfile': (context) => const MonComptePage(),
      },
    );
  }
}
//MAY YOUR COFFEE KICK IN BEFORE REALITY DOES.