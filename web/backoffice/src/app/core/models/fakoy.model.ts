export class UtilisateurModel {
    id!: number;
    nom!: string;
    prenom!: string;
    quartier!: string;
    cin!: string;
    username!: string;
    phone!: string;
    path_photo!: string;
    created_at!: Date;
    updated_at!: string;
}

export class FakoModel {
    id!: number;
    poids!: number;
    status!: boolean;
    prix!: number;
    created_at!: Date;
    username!: string;
    type_fako!: string;
    description!: string;
    nom_place!: string;
    cord_x!: string;
    cord_y!: string;
    fokontany_id!: number;
}

export class PlaceModel {
    id!: number;
    nom!:string;
    cord_x!: string
    cord_y!: string;
}


export class CreatePlaceModel {
    nom!: string;
    cord_x!: number;
    cord_y!: number;
    fokotany_i!: number;
}

export class CreateContenu {
    "description": string;
    "type_id": number;
}