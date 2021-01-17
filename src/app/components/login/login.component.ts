import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _router: Router, private _http: HttpClient, private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  /**
   * 
   */
  crearFormulario() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  /**
   * 
   */
  login() {
    let params = new HttpParams().set('user', this.loginForm.controls.usuario.value).set('pass', this.loginForm.controls.password.value);
    this._http.get('http://localhost:8090/api/login', { headers: null, params: params }).subscribe((result: Usuario) => {
      if (this.loginForm.controls.usuario.value === result.usuario) {
        sessionStorage.setItem('sesion', 'activa')
        this._router.navigate(['/home']);
      } else {
        window.location.reload();
      }
    });
  }

}
