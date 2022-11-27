import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthModel } from "../models/auth.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    setToken(token: string): void {
        localStorage.setItem('fakoy_iTuiant', token);
    }

    getToken(): string | null {
        return localStorage.getItem('fakoy_iTuiant');
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    login(donnees: AuthModel): Observable<any> {
        return this.http.post(environment.baseUrl + 'auth-user', donnees, { observe: "response" });
    }

    logOut(): void {
        localStorage.removeItem('fakoy_iTuiant');
        this.router.navigateByUrl('/');
    }
}
