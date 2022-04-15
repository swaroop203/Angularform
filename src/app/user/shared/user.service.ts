import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public PostRequest(apiURL: string, bodyText: any): Observable<any> {
    return this.httpClient.post(apiURL, bodyText).pipe();
  }

  GetRequest(apiURL: string): Observable<any> {
    return this.httpClient.get<any>(apiURL).pipe();
  }
}
