// ignore_for_file: prefer_const_constructors

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
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                            topRight: Radius.circular(30),
                            bottomRight: Radius.circular(30),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                width: Get.width * .65,
                height: Get.height * .2,
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
