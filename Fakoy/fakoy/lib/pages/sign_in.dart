import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';
import 'package:lottie/lottie.dart';

import '../app/jiaby.dart';
import '../constants/colors.dart';

class SignInPage extends StatefulWidget {
  const SignInPage({super.key});

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  String username = '', password = '';
  final DataController _data = DataController();
  bool _isHide = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white,
      ),
      body: SizedBox(
        height: Get.height,
        width: Get.width,
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(
                width: Get.width,
                height: Get.height * .55,
                child: Lottie.asset(
                  'assets/animation/sign-in-green.json',
                ),
              ),
              Form(
                child: Container(
                  width: Get.width,
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: TextStyle(color: greenDark),
                        controller: _usernameController,
                        onSaved: (val) {
                          username = val!;
                        },
                        decoration: InputDecoration(
                          prefixIcon: Icon(
                            Iconsax.profile_circle5,
                            color: greenDark,
                          ),
                          hintText: 'Prénom',
                          hintStyle: TextStyle(color: greenDark),
                          filled: true,
                          fillColor: greenLight.withOpacity(.3),
                          border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius: BorderRadius.circular(15),
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: TextStyle(color: greenDark),
                        onSaved: (val) {
                          password = val!;
                        },
                        controller: _passwordController,
                        obscureText: _isHide,
                        decoration: InputDecoration(
                          prefixIcon: Icon(
                            Iconsax.lock_circle5,
                            color: greenDark,
                          ),
                          suffixIcon: IconButton(
                              onPressed: () {
                                setState(() {
                                  _isHide = !_isHide;
                                });
                              },
                              icon: Icon(
                                !_isHide ? Iconsax.eye : Iconsax.eye_slash,
                                color: greenDark,
                              )),
                          hintText: 'Mot de passe',
                          hintStyle: TextStyle(color: greenDark),
                          filled: true,
                          fillColor: greenLight.withOpacity(.3),
                          border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius: BorderRadius.circular(15),
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                    ],
                  ),
                ),
              ),
              SizedBox(
                height: 50,
                width: 300,
                child: MaterialButton(
                  onPressed: () {
                    _data.login(
                      mdp: _passwordController.text,
                      pseudo: _usernameController.text,
                    );
                  },
                  color: greenLight,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadiusDirectional.circular(25),
                  ),
                  child: const Center(
                    child: Text(
                      'se connecter',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 25,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
