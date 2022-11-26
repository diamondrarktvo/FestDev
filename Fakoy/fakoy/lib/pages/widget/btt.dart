import 'package:fakoy/pages/home.dart';
import 'package:flutter/material.dart';

// import 'package:real_estate_app/screens/profilepage.dart';
// import 'package:real_estate_app/screens/favoritespage.dart';

class BottomNavBar extends StatefulWidget {
  const BottomNavBar({Key? key}) : super(key: key);

  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int _selectedIndex = 0;

  PageController pageController = PageController();

  final List<Widget> screens = <Widget>[
    const PageAcceuil(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: IndexedStack(index: _selectedIndex, children: screens),
      bottomNavigationBar: SizedBox(
        height: 80,
        child: BottomNavigationBar(
          elevation: 6,
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.white,
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(
                Icons.public,
                size: 25,
              ),
              label: 'Internet',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.wifi,
                size: 25,
              ),
              label: 'Réseau local',
            ),
          ],
          currentIndex: _selectedIndex,
          selectedItemColor: const Color(0xFF8C31D6),
          unselectedItemColor: Colors.black54,
          onTap: (index) => setState(() => _selectedIndex = index),
        ),
      ),
    );
  }
}
