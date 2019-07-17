import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class ArtistsAPI {
  name : string;
  description : string;
  assets : string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'http://localhost:3500'

  constructor(public http : HttpClient) { }
  
  public getArtists():Observable<any> {
    return this.http.get<ArtistsAPI>(`${this.URL}/api/artists`);
  }
}
