// ignore_for_file: prefer_const_constructors

import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';
import 'package:swipeable_button_view/swipeable_button_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool isFinished = false;
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
                        height: 56,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                            topRight: Radius.circular(30),
                            bottomRight: Radius.circular(30),
                          ),
                        ),
                        child: SwipeableButtonView(
                          buttonText: 'Commencer',
                          buttontextstyle: TextStyle(
                            color: greenLight,
                            fontSize: 23,
                            fontWeight: FontWeight.bold,
                          ),
                          buttonColor: Colors.white,
                          buttonWidget: Icon(
                            Icons.arrow_forward_ios_rounded,
                            color: Colors.grey,
                          ),
                          activeColor: Colors.white,
                          disableColor: greenLight,
                          isFinished: isFinished,
                          indicatorColor:
                              AlwaysStoppedAnimation<Color>(greenLight),
                          onWaitingProcess: () {
                            Future.delayed(Duration(seconds: 2), () {
                              setState(() {
                                isFinished = true;
                              });
                            });
                          },
                          onFinish: () async {
                            await Get.offNamed('/signIn');
                            setState(() {
                              isFinished = false;
                            });
                          },
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                width: Get.width * .65,
                height: Get.height * .3,
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
