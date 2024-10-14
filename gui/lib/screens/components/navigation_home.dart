import 'package:flutter/material.dart';

class HomeNavigationRail extends StatelessWidget {
  final int selectedIndex;
  final double groupAlignment = -1.0;
  final NavigationRailLabelType labelType = NavigationRailLabelType.all;
  final ValueChanged<int> onDestinationSelected;

  const HomeNavigationRail({
    super.key,
    required this.selectedIndex,
    required this.onDestinationSelected,
  });

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      selectedIndex: selectedIndex,
      groupAlignment: groupAlignment,
      onDestinationSelected: onDestinationSelected,
      labelType: labelType,
      leading: const SizedBox(),
      trailing: const SizedBox(),
      destinations: const <NavigationRailDestination>[
        NavigationRailDestination(
          icon: Icon(Icons.home_outlined),
          selectedIcon: Icon(Icons.home),
          label: Text('General'),
        ),
        NavigationRailDestination(
          icon: Icon(Icons.local_fire_department_outlined),
          selectedIcon: Icon(Icons.local_fire_department),
          label: Text('Tactics'),
        ),
        NavigationRailDestination(
          icon: Icon(Icons.token_outlined),
          selectedIcon: Icon(Icons.token),
          label: Text('Skills'),
        ),
        NavigationRailDestination(
          icon: Icon(Icons.extension_outlined),
          selectedIcon: Icon(Icons.extension),
          label: Text('Mod'),
        ),
        NavigationRailDestination(
          icon: Icon(Icons.settings_outlined),
          selectedIcon: Icon(Icons.settings),
          label: Text('Settings'),
        ),
      ],
    );
  }
}
