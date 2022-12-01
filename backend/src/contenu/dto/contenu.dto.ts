import { ApiProperty } from "@nestjs/swagger";

export class CreateContenuDto {
    @ApiProperty()
    description: string;

    @ApiProperty()
    type_id: number;
}

export class UpdateContenuDto {
    @ApiProperty()
    photo_1: string;

    @ApiProperty()
    photo_2: string;

    @ApiProperty()
    description: string;

}

export class ParamContenuIdDto {
    @ApiProperty()
    contenu_id: number;
}
