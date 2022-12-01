import 'package:flutter/material.dart';

List<Degradation> degradList = [
  Degradation(
    title: "Déchets végétaux",
    desc: "De quelques jours à quelques mois",
    icon: Icons.local_florist,
  ),
  Degradation(
    title: "Papier journal",
    desc: "De 3 à 12 mois",
    icon: Icons.sticky_note_2,
  ),
  Degradation(
    title: "Mégot de cigarette",
    desc: "2 ans",
    icon: Icons.smoking_rooms,
  ),
  Degradation(
    title: "Verre",
    desc: "4000 ans",
    icon: Icons.science,
  ),
];

class Degradation {
  final String title;
  final String desc;
  final IconData icon;

  Degradation({
    required this.title,
    required this.desc,
    required this.icon,
  });
}
