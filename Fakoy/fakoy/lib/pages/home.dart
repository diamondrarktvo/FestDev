// ignore_for_file: prefer_const_constructors

import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SizedBox(
        height: Get.height,
        width: Get.width,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              SizedBox(
                height: 50,
              ),
              Container(
                width: Get.width * .85,
                height: Get.height * .7,
                padding: EdgeInsets.only(left: 15),
                decoration: BoxDecoration(
                  color: greenLight,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(25),
                    bottomLeft: Radius.circular(25),
                  ),
                ),
                child: Column(
                  // ignore: prefer_const_literals_to_create_immutables
                  children: [
                    SizedBox(
                      width: Get.width,
                      height: Get.height * .45,
                      child: Lottie.asset(
                        'assets/animation/trash_basura.json',
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    SizedBox(
                      //   margin: EdgeInsets.all(15),
                      child: RichText(
                        text: TextSpan(
                          text: "Bienvenue sur FAKOY.",
                          style: TextStyle(
                            fontSize: 27,
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontFamily: 'Caviar',
                          ),
                          children: const <TextSpan>[
                            TextSpan(
                              text:
                                  '\nUne application qui vous permet de mieux apprecier votre environement.',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(
                height: 55,
                width: Get.width,
                child: Stack(
                  alignment: AlignmentDirectional.topStart,
                  children: [
                    Align(
                      alignment: Alignment.centerRight,
                      child: Container(
                        margin: EdgeInsets.zero,
                        height: 55,
                        width: Get.width * .8,
                        decoration: BoxDecoration(
                          color: greenLight,
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.zero,
                        width: Get.width * .7,
                        height: 55,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                            topRight: Radius.circular(30),
                            bottomRight: Radius.circular(30),
                          ),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              "Commencer",
                              style: TextStyle(
                                color: greenLight,
                                fontSize: 23,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(
                              width: 15,
                            ),
                            Icon(
                              Icons.arrow_forward_ios,
                              size: 20,
                              color: greenLight,
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                width: Get.width * .65,
                height: Get.height * .3,
                margin: EdgeInsets.zero,
                decoration: BoxDecoration(
                  color: greenLight,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(25),
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
