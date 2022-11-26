class User {
  int? statusCode;
  String? accessToken;
  int? id;
  String? nom;
  String? prenom;
  String? quartier;
  String? cin;
  String? username;
  String? phone;
  String? pathPhoto;
  String? createdAt;
  String? updatedAt;
  String? fonction;

  User(
      {this.statusCode,
      this.accessToken,
      this.id,
      this.nom,
      this.prenom,
      this.quartier,
      this.cin,
      this.username,
      this.phone,
      this.pathPhoto,
      this.createdAt,
      this.updatedAt,
      this.fonction});

  User.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    accessToken = json['access_token'];
    id = json['id'];
    nom = json['nom'];
    prenom = json['prenom'];
    quartier = json['quartier'];
    cin = json['cin'];
    username = json['username'];
    phone = json['phone'];
    pathPhoto = json['path_photo'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    fonction = json['fonction'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['statusCode'] = statusCode;
    data['access_token'] = accessToken;
    data['id'] = id;
    data['nom'] = nom;
    data['prenom'] = prenom;
    data['quartier'] = quartier;
    data['cin'] = cin;
    data['username'] = username;
    data['phone'] = phone;
    data['path_photo'] = pathPhoto;
    data['created_at'] = createdAt;
    data['updated_at'] = updatedAt;
    data['fonction'] = fonction;
    return data;
  }
}
