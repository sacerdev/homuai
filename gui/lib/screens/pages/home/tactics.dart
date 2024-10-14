import 'package:flutter/material.dart';

class TacticsPage extends StatelessWidget {
  const TacticsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.purple.shade100,
      alignment: Alignment.center,
      child: const Text(
        'Tactics',
        style: TextStyle(fontSize: 40),
      ),
    );
  }
}

/*
[Button Edit] [Button Add] [Button Remove] [Button Up] [Button Down]
[Table]
ID | Monster Name | Behaviour | Use | Level | ???
*/
