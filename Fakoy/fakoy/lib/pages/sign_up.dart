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
  String pseudo = "",
      name = "",
      lastname = "",
      cin = "",
      phone = "",
      quartier = "",
      password = "";
  final TextEditingController _pseudoController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _lastnameController = TextEditingController();
  final TextEditingController _cinController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _quartierController = TextEditingController();
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
                  padding: const EdgeInsets.symmetric(horizontal: 20),
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
                          prefixIcon: const Icon(
                            Iconsax.profile_circle5,
                            color: Colors.white,
                          ),
                          hintText: 'Pseudo',
                          hintStyle: const TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: greenLight,
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(15)),
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
                          prefixIcon: const Icon(
                            Iconsax.profile_circle5,
                            color: Colors.white,
                          ),
                          hintText: 'Nom ',
                          hintStyle: const TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: greenLight,
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(15)),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      TextFormField(
                        style: const TextStyle(color: Colors.white),
                        controller: _lastnameController,
                        onSaved: (val) {
                          lastname = val!;
                        },
                        decoration: InputDecoration(
                          prefixIcon: const Icon(
                            Iconsax.profile_circle5,
                            color: Colors.white,
                          ),
                          hintText: 'Prénom',
                          hintStyle: const TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: greenLight,
                          border: OutlineInputBorder(
                              borderSide: BorderSide.none,
                              borderRadius: BorderRadius.circular(15)),
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
                              borderRadius: BorderRadius.circular(15)),
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
