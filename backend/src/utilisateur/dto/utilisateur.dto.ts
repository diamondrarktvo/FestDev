import { ApiProperty } from "@nestjs/swagger";

export class CreateUtilisateurDto {
    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    quartier: string;

    @ApiProperty()
    cin: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    password: string;
}

export class ParamUtilisateurDto {
    @ApiProperty()
    utilisateur_id: number
}

export class UpdateUtilisateurDto {
    @ApiProperty()
    quartier: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    username: string;
}
