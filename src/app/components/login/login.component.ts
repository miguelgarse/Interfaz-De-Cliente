import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private router: Router,
    private userService: UsersService,
    private fb: FormBuilder) {

    this.crearFormulario();
  }

  ngOnInit() { }

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
    let username: string = this.loginForm.controls.usuario.value;
    let password: string = this.loginForm.controls.password.value;

    this.userService.login(username, password).subscribe((result: Usuario) => {
      if (username === result.username) {
        sessionStorage.setItem('sesion', 'activa')
        this.router.navigateByUrl('home', { skipLocationChange: true });
      } else {
        window.location.reload();
      }
    });
  }

  redirectRegister(): void{
    this.router.navigateByUrl('register', { skipLocationChange: true });
  }

}
