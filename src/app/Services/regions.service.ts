import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  CREATE_REGION = "http://localhost:8000/Api\RegionController@store";

  save(region:any):any{
    const req = this.client.post<any>(`$(CREATE_REGION)`,region);
    req.subscribe(data => {return data;});
  }

  constructor(public client: HttpClient) { }
}
