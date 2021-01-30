import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private endPoint: string;
  // private apiEndpoint: string = "http://138.4.92.46:8090"; // PRO
  private apiEndpoint: string = "http://localhost:8090";      // LOCAL

  constructor(private _http: HttpClient) { }

  recuperarClientes(): any {
    this.endPoint = this.apiEndpoint + "/api/client";
    return this._http.get(this.endPoint);
  }

  recogerSensoresCliente(cliente: String) {
    this.endPoint = this.apiEndpoint + "/api/sensors/client/" + cliente;
    return this._http.get(this.endPoint);
  }

  recogerValoresdeSensor(sensor: string) {
    this.endPoint = this.apiEndpoint + "/api/timeLine/" + sensor;
    return this._http.get(this.endPoint);
  }

  iniciarRangos(): any {
    this.endPoint = this.apiEndpoint + "/recuperarRangos";
    return this._http.get(this.endPoint);
  }

  cambiarRangos(tempMin, tempMax): any {
    this.endPoint = this.apiEndpoint + "/rangos/".concat(tempMin).concat("/").concat(tempMax);
    return this._http.get(this.endPoint);
  }
}
