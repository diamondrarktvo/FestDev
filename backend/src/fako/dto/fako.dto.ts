import { ApiProperty } from "@nestjs/swagger";

export class CreateFakoDto {
    @ApiProperty()
    poids: number;

    @ApiProperty()
    utilisateur_id: number;

    @ApiProperty()
    type_id: number;

    @ApiProperty()
    place_id: number;
}
