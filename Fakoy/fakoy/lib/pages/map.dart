import 'package:fakoy/constants/colors.dart';
import 'package:iconsax/iconsax.dart';
import "package:latlong2/latlong.dart";
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_map/plugin_api.dart';

class CartePage extends StatefulWidget {
  const CartePage({super.key});

  @override
  State<CartePage> createState() => _CartePageState();
}

class _CartePageState extends State<CartePage> {
  final LatLng _center = LatLng(-18.88353410, 47.53613550);
  final MapController _mapController = MapController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: greenDark,
        elevation: 0,
        centerTitle: true,
        leading: const SizedBox(),
        title: const Text(
          'POINTS DE RECUPERATION',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 25,
            color: Colors.white,
          ),
        ),
      ),
      body: FlutterMap(
        options: MapOptions(center: _center, zoom: 13.0),
        mapController: _mapController,
        children: [
          TileLayer(
              urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'),
          MarkerLayer(markers: [
            Marker(
                width: 30.0,
                height: 30.0,
                point: LatLng(-18.88353410, 47.53613550),
                builder: (ctx) => const Icon(
                      Iconsax.location5,
                      color: Colors.red,
                      size: 40,
                    )),
            Marker(
                width: 30.0,
                height: 30.0,
                point: LatLng(-18.87607440, 47.54350240),
                builder: (ctx) => const Icon(
                      Iconsax.location5,
                      color: Colors.red,
                      size: 40,
                    )),
          ])
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: greenDark,
        onPressed: () {
          _mapController.move(_center, 13.0);
        },
        child: const Icon(Iconsax.location5),
      ),
    );
  }
}
