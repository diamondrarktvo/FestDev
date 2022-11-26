import 'package:fakoy/pages/sign_up.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'pages/home.dart';
import 'pages/sign_in.dart';

void main() {
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
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/signUp': (context) => const SignUpPage(),
        '/signIn': (context) => const SignInPage(),
      },
    );
  }
}
//MAY YOUR COFFEE KICK IN BEFORE REALITY DOES.