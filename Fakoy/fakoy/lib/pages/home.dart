// ignore_for_file: prefer_const_constructors

import 'dart:ui';

import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

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
                margin: EdgeInsets.zero,
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
                    Container(
                      width: Get.height * .4,
                      height: Get.height * .3,
                      margin: EdgeInsets.only(top: 50),
                      padding: EdgeInsets.zero,
                      child: Stack(
                          alignment: AlignmentDirectional.centerStart,
                          children: [
                            Opacity(
                              opacity: 0.5,
                              child: Image.asset(
                                'assets/logo/logo.png',
                                color: greenDark,
                              ),
                            ),
                            ClipRect(
                              child: BackdropFilter(
                                filter:
                                    ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
                                child: Image.asset('assets/logo/logo.png'),
                              ),
                            )
                          ]),
                    ),
                    Container(
                      margin: EdgeInsets.all(15),
                      child: Text(
                        "Bienvenue sur FAKOY . Une application qui vous permet de mieux apprecier votre environement.",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 23,
                          fontWeight: FontWeight.w500,
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
