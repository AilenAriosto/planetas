import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RequestService{
  public url: string;

  constructor( public _http: HttpClient ){
    this.url = "https://ailenariosto.github.io/planetas/planets_api.json"
  }

  getPlanetasJson(): Observable<any>{
    return this._http.get(this.url)
  }


}
