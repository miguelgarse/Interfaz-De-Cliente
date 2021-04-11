import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { constantes } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private endPoint: string;
  private apiEndpoint: string = "http://localhost:8090";     // LOCAL
  // private apiEndpoint: string = "http://88.18.184.82:8090";  // INT
  // private apiEndpoint: string = "http://138.4.92.46:8090";   // PRO
 
  constructor(private http: HttpClient) { }


  public newProject(project: Project): Observable<any> {
    return this.http.post<any>(this.apiEndpoint + "/api/admin/createUser", project, 
    { 
      observe: 'response' 
    });
  }

  public updateProject(project: Project): Observable<any> {
    return this.http.post<any>(this.apiEndpoint + "/api/admin/createUser", project, 
    { 
      observe: 'response' 
    });
  }

  public findAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiEndpoint + "/api/project");
  }

}
