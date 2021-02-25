import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/Usuario';
import { UsersService } from 'src/app/services/users.service';
import { HttpStatusCodes } from 'src/app/utils/http-status-codes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public user: Usuario = new Usuario();
  public repeatedPassword: string = "";
  
  constructor(private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  public register(): void {
    if (this.user.username && this.user.username.length > 0
      && this.user.mail && this.user.mail.length > 0
      && this.user.password && this.user.password.length > 0) {

      this.usersService.registerUser(this.user).subscribe(response => {

        switch (response.status) {
          case HttpStatusCodes.CREATED:
            console.log("Usuario creado correctamente: " + this.user.username);
            this.toastr.success("Usuario registrado correctamente: " + this.user.username);
            break;
        }

      }, (error: any) => {
        switch (error.status) {
          case HttpStatusCodes.BAD_REQUEST:
            this.toastr.error("No se ha enviado el usuario, el correo o la contraseña");
            break;
          case HttpStatusCodes.CONFLICT:
            this.toastr.error("Nombre de usuario duplicado");
            break;
          case HttpStatusCodes.INTERNAL_SERVER_ERROR:
            this.toastr.error("Error interno del servidor");
            break;
        }
      });
    } else {
      if (!this.user.username || this.user.username.length < 1) {
        this.toastr.error("Debe introducir un usuario");
      }
      if (!this.user.mail || this.user.mail.length < 1) {
        this.toastr.error("Debe introducir un correo");
      }
      if (!this.user.password || this.user.password.length < 1) {
        this.toastr.error("Debe introducir una contraseña");
      }
    }
  }

  /**
   * Permite comporbar si un nombre de usuario ya existe en la base de datos.
   */
  public checkExistingUsername() {
    this.usersService.checkUsername(this.user.username).subscribe(response => {

     if (response.status == HttpStatusCodes.OK) { // Usuario ya existe
        console.log("Usuario ya existe");
        this.toastr.warning("El usuario " + this.user.username + " ya existe");
      }

    }, (error: any) => {
      if (error.status == HttpStatusCodes.NOT_FOUND) { // Usuario no existe
        console.log("Usuario no existe");
        this.toastr.info("El usuario " + this.user.username + " está disponible");
      } else if (error.status == HttpStatusCodes.INTERNAL_SERVER_ERROR) {
        console.log("Error en el servidor");
        this.toastr.error("Error al comporbar existencia del usuario " + this.user.username);
      }
    });
  }

  redirectLogin(): void{
    this.router.navigateByUrl('', { skipLocationChange: true });
  }

}
