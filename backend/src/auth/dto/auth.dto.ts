export class AuthDto {
    username: string;
    password: string;
}

export class AuthUtilisateurResponseDto {
    id: number;
    fonction: string;
    username: string
}

export class AuthUtilisateurResponseTokenDto {
    access_token: string;
}
