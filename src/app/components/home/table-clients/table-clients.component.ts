import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { Jwt } from 'src/app/models/Jwt';
import { Sensor } from 'src/app/models/Sensor';
import { SensorType } from 'src/app/models/SensorType';
import { TimeLine } from 'src/app/models/TimeLine';
import { Valores } from 'src/app/models/Valores';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  public clients: Client[] = [];
  public tipos: SensorType = new SensorType();
  public tablas: number;
  public columnas: number[] = []
  public sensores: Sensor[] = [];
  public temperaturaProgreso: number;
  public luminosidadProgreso: number;
  public calidadProgreso: number;
  public humedadProgreso: number;
  public temperaturaProgresoString: string;
  public luminosidadProgresoString: string;
  public calidadProgresoString: string;
  public humedadProgresoString: string;
  public sumas: number[] = [0, 0, 0, 0];
  public temperatura: number[] = [];
  public luminosidad: number[] = [];
  public calidad: number[] = [];
  public humedad: number[] = [];
  public cliente: Client;
  public fecha: Date;
  
  constructor(private router: Router, private service: UploadService) { 

    this.fecha = new Date();

    this.recuperarClientes();

    setTimeout(() => this.clients.forEach(client => {
      this.service.recogerSensoresCliente(client.thingsboardId).subscribe((response: Sensor[]) => {
        response.forEach(sensor => {
          client.sensores.push(sensor);

        });
      })
    }), 2000)

    setTimeout(() =>
      this.clients.forEach(client => {
        if (!(client.sensores.length == 0)) {
          client.sensores.forEach(sensor => {
            this.service.recogerValoresdeSensor(sensor.id).toPromise().then((result: TimeLine[]) => {
              if (!(result.length == 0)) {
                for (let i = 0; i < 5; i++) {
                  if (result[i].sensor.tipoSensorId == 'Humedad Ambiental' || result[i].sensor.tipoSensorId == 'Humedad Superficie') {
                    this.humedad.push(result[i].valor);
                    this.sumas[0] = this.sumas[0] + +result[i].valor;
                    let element: HTMLElement = document.getElementById("humedadProgreso");
                    element.style.height = '20rem';
                    this.humedadProgreso = this.sumas[0] / this.humedad.length;
                    element.style.width = this.humedadProgreso + '%';
                    this.humedadProgresoString = this.humedadProgreso.toString();
                  }
                  if (result[i].sensor.tipoSensorId == 'Temperatura Ambiental' || result[i].sensor.tipoSensorId == 'Temperatura Superficie') {
                    this.temperatura.push(result[i].valor);
                    this.sumas[1] = this.sumas[1] + +result[i].valor
                    let element: HTMLElement = document.getElementById("temperaturaProgreso");
                    element.style.height = '20rem';
                    this.temperaturaProgreso = this.sumas[1] / this.temperatura.length;
                    element.style.width = this.temperaturaProgreso + '%';
                    this.temperaturaProgresoString = this.temperaturaProgreso.toString();
                  }
                  if (result[i].sensor.tipoSensorId == 'Co2') {
                    var valor = ((2000 - result[i].valor) * 100) / 1550;
                    this.calidad.push(result[i].valor);
                    this.sumas[2] = this.sumas[2] + +result[i].valor;
                    let element: HTMLElement = document.getElementById("calidadProgreso");
                    element.style.height = '20rem';
                    this.calidadProgreso = this.sumas[2] / this.calidad.length;
                    if (this.calidadProgreso == 449) {
                      this.calidadProgreso = -1;
                    }
                    element.style.width = this.calidadProgreso + '%';
                    this.calidadProgresoString = this.calidadProgreso.toString();
                  }
                  if (result[i].sensor.tipoSensorId == 'Luminosidad') {
                    this.luminosidad.push(result[i].valor);
                    this.sumas[3] = this.sumas[3] + +result[i].valor;
                    var element = document.getElementById("luminosidadProgreso");
                    element.style.height = '20rem';
                    this.luminosidadProgreso = this.sumas[3] / this.luminosidad.length;
                    element.style.width = this.luminosidadProgreso + '%';
                    this.luminosidadProgresoString = this.luminosidadProgreso.toString();
                  }
                }
              }
            });
          });
        }
        //Llamar a la funcion para evaluar el estado de cada cliente
      }), 5000)
  }

  buscadorClientes(identificador: String) {
    for (var i = 0; i < this.clients.length; i++)
      if (this.clients[i].thingsboardId === identificador) {
        return this.clients[i];
      }
  }

  /**
   * 
   */
  recuperarClientes() {
    return new Promise((resolve, reject) => {
      this.service.recuperarClientes().subscribe((clientes: any[]) => {
        for (var i = 0; i < clientes.length; i++) {
          var sensores: Sensor[] = [];
          let cliente = new Client(clientes[i].id, clientes[i].descripcion, clientes[i].letra, clientes[i].thingsboardId, new Valores(), 2, sensores);
          this.clients.push(cliente);
         
        }
        resolve();
      },
        err => console.log("El ERROR producido", err),
      );
    });

  }

  graficaTemperatura(cliente: string) {
    this.router.navigate(['/graficaTemperatura', cliente]);
  }
  graficaHumedad(cliente: string) {
    this.router.navigate(['/graficaHumedad', cliente]);
  }
  graficaCalidad(cliente: string) {
    this.router.navigate(['/graficaCalidad', cliente]);
  }
  graficaLuminosidad(cliente: string) {
    this.router.navigate(['/graficaLuminosidad', cliente]);
  }

  getConnectedUser(): Jwt {
    let connectedUser: Jwt = Object.assign(new Jwt(), JSON.parse(sessionStorage.getItem("connectedUser")));
    return connectedUser;
  }
  
  ngOnInit() {
  }

}
