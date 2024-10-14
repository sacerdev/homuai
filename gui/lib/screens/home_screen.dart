import 'package:flutter/material.dart';
import 'package:hoaiconfig/screens/pages/home/general.dart';
import 'package:hoaiconfig/screens/pages/home/mod.dart';
import 'package:hoaiconfig/screens/pages/home/settings.dart';
import 'package:hoaiconfig/screens/pages/home/skills.dart';
import 'package:hoaiconfig/screens/pages/home/tactics.dart';
import 'package:hoaiconfig/screens/components/navigation_home.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final List<Widget> _pages = [
    const GeneralPage(),
    const TacticsPage(),
    const SkillsPage(),
    const ModPage(),
    const SettingsPage(),
  ];

  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          HomeNavigationRail(
            selectedIndex: _selectedIndex,
            onDestinationSelected: (int index) {
              setState(() {
                _selectedIndex = index;
              });
            },
          ),
          Expanded(child: _pages[_selectedIndex]),
        ]
      ),
    );
  }
}
