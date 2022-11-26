import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';

class SignUpPage extends StatefulWidget {
  const SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  String pseudo = "", name = "", password = "", lastname = "";
  final TextEditingController _pseudoController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _lastnameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  @override
  void initState() {
    _pseudoController.text = "";
    _nameController.text = "";
    _passwordController.text = "";
    _lastnameController.text = "";
    super.initState();
  }

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
              Form(
                child: Container(
                  width: Get.width,
                  padding: const EdgeInsets.symmetric(horizontal: 30),
                  height: Get.height * .45,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      TextFormField(
                        style: const TextStyle(color: Colors.black),
                        controller: _pseudoController,
                        onSaved: (val) {
                          pseudo = val!;
                        },
                        decoration: InputDecoration(
                          prefixIcon: Icon(
                            Iconsax.profile_circle5,
                            color: greenDark,
                          ),
                          hintText: 'Pseudo',
                          hintStyle: const TextStyle(color: Colors.black),
                          filled: true,
                          fillColor: const Color(0xFFE6E3E3),
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(50)),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: const TextStyle(color: Colors.black),
                        controller: _nameController,
                        onSaved: (val) {
                          name = val!;
                        },
                        decoration: InputDecoration(
                          prefixIcon: Icon(
                            Iconsax.profile_circle5,
                            color: greenDark,
                          ),
                          hintText: 'Nom ',
                          hintStyle: const TextStyle(color: Colors.black),
                          filled: true,
                          fillColor: const Color(0xFFE6E3E3),
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(50)),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: const TextStyle(color: Colors.black),
                        controller: _lastnameController,
                        onSaved: (val) {
                          lastname = val!;
                        },
                        decoration: InputDecoration(
                          prefixIcon: Icon(
                            Iconsax.profile_circle5,
                            color: greenDark,
                          ),
                          hintText: 'Prénom',
                          hintStyle: const TextStyle(color: Colors.black),
                          filled: true,
                          fillColor: const Color(0xFFE6E3E3),
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(50)),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: const TextStyle(color: Colors.black),
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
                          hintStyle: const TextStyle(color: Colors.black),
                          filled: true,
                          fillColor: const Color(0xFFE6E3E3),
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(50)),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
