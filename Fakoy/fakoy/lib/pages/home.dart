// ignore_for_file: prefer_const_constructors

import 'package:fakoy/app/jiaby.dart';
import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';

import '../constants/info.dart';

class PageAcceuil extends StatefulWidget {
  const PageAcceuil({super.key});

  @override
  State<PageAcceuil> createState() => _PageAcceuilState();
}

class _PageAcceuilState extends State<PageAcceuil> {
  //final _advancedDrawerController = AdvancedDrawerController();
  final DataController _data = DataController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        elevation: 0,
        leading: IconButton(
          onPressed: () {
            _data.qualiteAir();
            print("object");
          },
          icon: Icon(
            Iconsax.menu5,
            color: greenDark,
          ),
        ),
        title: Text(
          'FAKOY',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 25,
            color: greenDark,
          ),
        ),
      ),
      body: SizedBox(
        height: Get.height,
        width: Get.width,
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 120,
                padding: const EdgeInsets.all(20),
                color: Colors.white,
                child: RichText(
                  text: TextSpan(
                    text: "C'est quoi ?",
                    style: TextStyle(
                      fontSize: 27,
                      color: greenDark,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'Caviar',
                    ),
                    children: <TextSpan>[
                      TextSpan(
                        text: "\nUne solution numerique face à la polution",
                        style: TextStyle(
                          color: greenDark,
                          overflow: TextOverflow.ellipsis,
                          fontSize: 20,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                width: Get.width,
                height: Get.height * .3,
                margin: const EdgeInsets.only(
                  left: 50,
                ),
                decoration: BoxDecoration(
                    color: greenLight,
                    borderRadius: const BorderRadius.only(
                      topLeft: Radius.circular(20),
                      bottomLeft: Radius.circular(20),
                    )),
              ),
              Container(
                padding: const EdgeInsets.all(20),
                color: Colors.white,
                width: Get.width,
                child: Text(
                  "Pollution",
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    fontSize: 27,
                    color: greenDark,
                    fontWeight: FontWeight.bold,
                    fontFamily: 'Caviar',
                  ),
                ),
              ),
              Row(
                children: [
                  Container(
                    width: Get.width,
                    height: 200,
                    padding: const EdgeInsets.only(left: 15),
                    child: ListView.builder(
                      itemCount: degradList.length,
                      scrollDirection: Axis.horizontal,
                      itemBuilder: ((context, index) {
                        Degradation degradation = degradList[index];
                        return fruitWidget(
                          icon: degradation.icon,
                          title: degradation.title,
                          desc: degradation.desc,
                        );
                      }),
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget fruitWidget({
    required IconData icon,
    required String title,
    required String desc,
  }) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 5,
      ),
      width: 150,
      decoration: BoxDecoration(
        color: greenLight,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 15,
          ),
          Icon(
            icon,
            size: 80,
            color: Colors.white,
          ),
          SizedBox(
            height: 15,
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 15),
            width: Get.width,
            child: Text(
              title,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
                color: greenDark,
              ),
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 15),
            width: Get.width,
            child: Text(
              desc,
              style: TextStyle(
                fontWeight: FontWeight.normal,
                fontSize: 15,
                color: greenDark,
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
//https://i.pinimg.com/originals/ba/cd/52/bacd526c70de54125e54751040c301a0.png