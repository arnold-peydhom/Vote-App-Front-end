import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private CREATE_URL = "http://localhost:8000/api/RegionController@store";

  constructor(private http: HttpClient) { }

  // Enregistrer une nouvelle region dans l'API
  createRegion(data: any): Observable<any> {
    return this.http.post(this.CREATE_URL, data);
  }

  // Supprimer une region

  //modifier une region

}
