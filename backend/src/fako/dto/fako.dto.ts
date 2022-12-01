import { ApiProperty } from "@nestjs/swagger";

export class CreateFakoDto {
    @ApiProperty()
    poids: number;

    @ApiProperty()
    utilisateur_id: string;

    @ApiProperty()
    type_id: number;

    @ApiProperty()
    place_id: number;
}

export class ParamFakoUtilisateurIdDto {
    @ApiProperty()
    utilisateur_id: number;
}

export class ParamFakoStatusDto {
    @ApiProperty()
    status: boolean;
}

export class ParamFakoTypeId {
    @ApiProperty()
    type_id: number;
}

export class UpdateFakoStatusDto {
    @ApiProperty()
    fako_id: number;
}
