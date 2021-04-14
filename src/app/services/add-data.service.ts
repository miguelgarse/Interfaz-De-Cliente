import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  private endPoint: string;
  private apiEndpoint: string = "http://localhost:8090";     // LOCAL
  // private apiEndpoint: string = "http://88.18.184.82:8090";  // INT
  // private apiEndpoint: string = "http://138.4.92.46:8090";   // PRO
 
  constructor(private http: HttpClient) { }

  public uploadFiles(file: File): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(this.apiEndpoint + "/api/client/add-data", formData,
      { headers: headers }
    );
  }

}
