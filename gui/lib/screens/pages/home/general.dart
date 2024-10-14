import 'package:flutter/material.dart';

class GeneralPage extends StatefulWidget {
  const GeneralPage({super.key});

  @override
  State<GeneralPage> createState() => _GeneralPageState();
}

class _GeneralPageState extends State<GeneralPage> {
  double _attackMinHp = 20;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.yellow.shade100,
      alignment: Alignment.center,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Column(
                children: [
                  const Text(
                    'Homunculus: Attack and Evade',
                    style: TextStyle(fontSize: 20),
                  ),
                  Row(
                    children: [
                      const Text('Attack when HP > '),
                      Slider(
                        value: _attackMinHp,
                        min: 1,
                        max: 100,
                        label: _attackMinHp.round().toString(),
                        onChanged: (double value) {
                          setState(() {
                            _attackMinHp = value;
                          });
                        },
                      ),
                    ],
                  ),
                ]
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  'Item 3',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/*
## Homunculus: Attack and Evade
Attack when HP > [Slider 1-100]
[checkbox] dont'chase
Evade when HP < [Slider 1-100]
[checkbox] cautious
--
[checkbox] Switch target on battle, to go help the owner
[checkbox] Take care of homunculus enemies first

## Kind Homunculus
[checkbox] Don't attack moving monsters
[checkbox] Try to detect area spells and frozen monsters

## Other
Max enemey distance from the alchemist [NumberInput 2-20]
Max time for skills (ms): [NumberInput 1-999999]
ORWNER_CLOSEDISTANCE: [NumberInput 0-999999]
OLD_HOMUN_TYPE [Select [Vanilmirth, Lif, Filir, Amistr]]
[checkbox] Follow the alchemist at once
[checkbox] Circle around the alchemist when full
*/
