import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanetResponse } from '../interfaces/planets-response.interface';
import { Observable } from 'rxjs';


const authURL = 'https://swapi.co/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {  
  }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
       authURL,
       requestOptions
    );
 }

}

