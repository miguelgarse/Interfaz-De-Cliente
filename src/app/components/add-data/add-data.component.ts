import { Component, OnInit } from '@angular/core';
import { AddDataService } from 'src/app/services/add-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public qrResultString: string;
  public fileList: File[] = [];

  constructor(private addDataService: AddDataService) { }

  ngOnInit() {
  }

  public  handleQrCodeResult(resultString: string) {
    this.qrResultString = resultString;

  } 

  fileChange(event: any) {
    if(event.target.files != null && event.target.files.length > 0){
      let fileSize: number = event.target.files[0].size;

      this.fileList.push(event.target.files[0]);

      event.target.value = '';  //Vaciamos el array en el que nos vienen los ficheros que hemos seleccionado con el input
    }
  }

  uploadFiles(){
    this.addDataService.uploadFiles(this.fileList[0]).subscribe(response => {

    }, error => {
      console.error('Se ha producido un error. ' + error);
    });
  }
}
