class MapCoordonate {
  int? id;
  String? nom;
  String? cordX;
  String? cordY;

  MapCoordonate({this.id, this.nom, this.cordX, this.cordY});

  MapCoordonate.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    nom = json['nom'];
    cordX = json['cord_x'];
    cordY = json['cord_y'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['nom'] = nom;
    data['cord_x'] = cordX;
    data['cord_y'] = cordY;
    return data;
  }
}
