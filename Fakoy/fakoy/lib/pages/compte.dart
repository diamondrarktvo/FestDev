import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';

import '../app/jiaby.dart';

class MonComptePage extends StatefulWidget {
  const MonComptePage({super.key});

  @override
  State<MonComptePage> createState() => _MonComptePageState();
}

class _MonComptePageState extends State<MonComptePage> {
  final DataController _data = DataController();
  String username = "",
      quartier = "",
      qrCodeUrl = "",
      fonction = "",
      phone = "",
      cin = "";
  _alaikoDegany() async {
    final data = await _data.getUserInfo();

    setState(() {
      username = "${data.nom} ${data.prenom}";
      qrCodeUrl = data.qrCode!;
      quartier = data.quartier!;
      fonction = data.fonction!;
      cin = data.cin!;
      phone = data.phone!;
    });
  }

  @override
  void initState() {
    _alaikoDegany();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: greenLight,
      appBar: AppBar(
        elevation: 0,
        backgroundColor: greenLight,
        leading: const SizedBox(),
      ),
      body: SizedBox(
        height: Get.height,
        width: Get.width,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                padding: const EdgeInsets.all(20),
                color: Colors.transparent,
                width: Get.width,
                child: Center(
                  child: Text(
                    username,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 50,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'Caviar',
                    ),
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(5),
                color: Colors.transparent,
                width: Get.width,
                child: Text(
                  quartier,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 25,
                    color: Colors.white60,
                    fontWeight: FontWeight.bold,
                    fontFamily: 'Caviar',
                  ),
                ),
              ),
              Container(
                width: 380,
                height: 380,
                margin: const EdgeInsets.all(25),
                padding: EdgeInsets.zero,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Stack(
                  children: [
                    Container(
                      width: 380,
                      height: 380,
                      padding: EdgeInsets.zero,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                          width: 5,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    Stack(
                      alignment: AlignmentDirectional.center,
                      children: [
                        Stack(
                          alignment: AlignmentDirectional.center,
                          children: [
                            Container(
                              width: 200,
                              height: 380,
                              color: Colors.white,
                            ),
                            Container(
                              width: 380,
                              height: 260,
                              color: Colors.white,
                            ),
                          ],
                        ),
                        SizedBox(
                          width: 380,
                          height: 330,
                          child: Image.network(
                            qrCodeUrl.isEmpty
                                ? 'http://faq-login-unico.servicos.gov.br/en/latest/_images/imagem_qrcode_exemplo.jpg'
                                : '${_data.baseUrl}/$qrCodeUrl',
                            fit: BoxFit.fitHeight,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.all(10),
                color: Colors.transparent,
                width: Get.width,
                child: Center(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(
                        Iconsax.card5,
                        color: Colors.white,
                      ),
                      const SizedBox(
                        width: 7,
                      ),
                      Text(
                        cin,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 25,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontFamily: 'Caviar',
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(10),
                color: Colors.transparent,
                width: Get.width,
                child: Center(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(
                        Iconsax.call5,
                        color: Colors.white,
                      ),
                      const SizedBox(
                        width: 7,
                      ),
                      Text(
                        phone,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 25,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontFamily: 'Caviar',
                        ),
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
