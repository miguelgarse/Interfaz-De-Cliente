import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from '../models/Jwt';
import { Usuario } from '../models/Usuario';
import { constantes } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endPoint: string;
  private apiEndpoint: string = "http://localhost:8090";     // LOCAL
  // private apiEndpoint: string = "http://88.18.184.82:8090";  // INT
  // private apiEndpoint: string = "http://138.4.92.46:8090";   // PRO
 
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<Jwt> {
    this.endPoint = this.apiEndpoint + "/auth/login";
    return this.http.post<Jwt>(this.endPoint, {username, password});
  }

  public checkUsername(username: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(constantes.URL_REGISTRO + "/" + username, { observe: 'response' } );
  }

  public registerUser(user: Usuario): Observable<any> {

    return this.http.post<any>(this.apiEndpoint + "/api/admin/createUser", user, 
    { 
      observe: 'response' 
    });
  }

  public getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiEndpoint + "/api/admin/getAllUsers");
  }

}
