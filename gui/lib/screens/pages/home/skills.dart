import 'package:flutter/material.dart';

class SkillsPage extends StatelessWidget {
  const SkillsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green.shade100,
      alignment: Alignment.center,
      child: const Text(
        'Skills',
        style: TextStyle(fontSize: 40),
      ),
    );
  }
}

/*
Please choose the minimum amount of SP for each skill and the skill level to use (OFF = skill disabled).

## Amistr
Bulwark [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
Castling [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]

## Filir
Moonlight [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
Accelerated Flight [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
Flitting [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]

## Lif
Healing Touch [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
Urgent Escape [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]

## Vanilmirth
Caprice [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
Chaotic Blessings [NumberInput 0-999999] [Select [OFF, Lv 1, Lv 2, Lv 3, Lv 4, Lv 5]]
*/
