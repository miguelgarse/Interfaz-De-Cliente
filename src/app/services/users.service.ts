import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { constantes } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endPoint: string;
  // private apiEndpoint: string = "http://138.4.92.46:8090"; // PRO
  private apiEndpoint: string = "http://localhost:8090";      // LOCAL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Usuario> {
    let params = new HttpParams().set('user', username).set('pass', password);

    this.endPoint = this.apiEndpoint + "/api/login";
    return this.http.get<Usuario>(this.endPoint, { headers: null, params: params });
  }

  public checkUsername(username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(constantes.URL_REGISTRO + "/" + username, { observe: 'response' } );
  }

  public registerUser(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(constantes.URL_REGISTRO, {username, email, password}, { observe: 'response' });
  }

}
