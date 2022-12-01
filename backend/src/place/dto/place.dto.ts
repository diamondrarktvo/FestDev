import { ApiProperty } from "@nestjs/swagger";

export class CreatePlaceDto {
    @ApiProperty()
    nom: string;

    @ApiProperty()
    cord_x: string;

    @ApiProperty()
    cord_y: string;

    @ApiProperty()
    fokotany_id: number;
}
