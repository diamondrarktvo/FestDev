import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}

export class AuthResponseDto {
    id: number;
    fonction: string;
    username: string
}

export class AuthResponseTokenDto {
    access_token: string;
}
