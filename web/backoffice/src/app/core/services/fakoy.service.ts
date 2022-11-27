import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateContenu, CreatePlaceModel, FakoModel, 
    PlaceModel, UtilisateurModel } from "../models/fakoy.model";

@Injectable({
    providedIn: 'root'
})
export class FakoyService {
    constructor(
        private http: HttpClient
    ) {}

    getAllUtilisateurs(): Observable<UtilisateurModel[]> {
        return this.http.get<UtilisateurModel[]>(environment.baseUrl + 'utilisateur/all')
    }

    getAllFako(): Observable<FakoModel[]> {
        return this.http.get<FakoModel[]>(environment.baseUrl + 'fako/all') ;
    }

    getalPlaces(): Observable<PlaceModel[]> {
        return this.http.get<PlaceModel[]>(environment.baseUrl + 'place/all');
    }

    cretePlaces(donnees: CreatePlaceModel): Observable<any> {
        return this.http.post(environment.baseUrl + 'place/create', 
            donnees, {observe: 'response'});
    }

    createContenu(file: any, donnees: CreateContenu): Observable<any> {
        const data = new FormData();
        data.set('file', file);
        const passData = {...donnees, data};
        return this.http.post(environment.baseUrl + 'contenu/create', passData, {observe: 'response'});
    }

    getAllContenu() {
        return this.http.get(environment.baseUrl + 'contenu/all');
    }
}
