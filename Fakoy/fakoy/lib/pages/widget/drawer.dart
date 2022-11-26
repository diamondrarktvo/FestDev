import 'package:fakoy/constants/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_advanced_drawer/flutter_advanced_drawer.dart';
import 'package:iconsax/iconsax.dart';

import '../home.dart';

class CustomDrawer extends StatefulWidget {
  const CustomDrawer({Key? key}) : super(key: key);

  @override
  CustomDrawerState createState() => CustomDrawerState();
}

class CustomDrawerState extends State<CustomDrawer> {
  final _advancedDrawerController = AdvancedDrawerController();
  int selectedIndex = 0;
  final List screens = [
    const PageAcceuil(),
  ];
  @override
  Widget build(BuildContext context) {
    return AdvancedDrawer(
      backdropColor: greenLight.withOpacity(0.9),
      controller: _advancedDrawerController,
      animationCurve: Curves.easeInOut,
      animationDuration: const Duration(milliseconds: 300),
      animateChildDecoration: true,
      rtlOpening: false,
      disabledGestures: false,
      childDecoration: const BoxDecoration(
          borderRadius: BorderRadius.all(
            Radius.circular(25),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black12,
              blurRadius: 15,
              spreadRadius: 20,
            ),
          ]),
      drawer: SafeArea(
        child: ListTileTheme(
          textColor: Colors.white,
          iconColor: Colors.white,
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Container(
                width: 128.0,
                height: 50.0,
                margin: const EdgeInsets.only(
                  top: 64.0,
                  bottom: 64.0,
                ),
              ),
              ListTile(
                onTap: () => _menuCtrl(index: 0),
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: greenDark.withOpacity(0.5),
                  child: const Icon(
                    Iconsax.home,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                title: const Text(
                  'Acceuil',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ),
              const Divider(),
              ListTile(
                onTap: () {},
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: greenDark.withOpacity(0.5),
                  child: const Icon(
                    Iconsax.user,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                title: const Text(
                  'Mon compte',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ),
              const Divider(),
              ListTile(
                onTap: () {},
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: greenDark.withOpacity(0.5),
                  child: const Icon(
                    Iconsax.map_1,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                title: const Text(
                  'Voir la carte',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ),
              const Divider(),
              ListTile(
                onTap: () {},
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: greenDark.withOpacity(0.5),
                  child: const Icon(
                    Iconsax.save_2,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                title: const Text(
                  'Historique',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ),
              const Divider(),
              ListTile(
                onTap: () {},
                leading: CircleAvatar(
                  radius: 20,
                  backgroundColor: greenDark.withOpacity(0.5),
                  child: const Icon(
                    Iconsax.logout,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                title: const Text(
                  'Quitter fakoy',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 16,
                  ),
                ),
              ),
              const Spacer(),
              DefaultTextStyle(
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.white,
                  fontFamily: "Caviar",
                  fontWeight: FontWeight.w600,
                ),
                child: Container(
                  margin: const EdgeInsets.symmetric(
                    vertical: 16.0,
                  ),
                  child: const Text('FAKOY'),
                ),
              ),
            ],
          ),
        ),
      ),
      child: screens[selectedIndex],
    );
  }

  void _menuCtrl({
    required int index,
  }) {
    setState(() => selectedIndex = index);
    _advancedDrawerController.hideDrawer();
  }
}
