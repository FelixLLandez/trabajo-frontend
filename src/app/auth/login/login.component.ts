import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceSolicitanteService } from '../../services/service-solicitante.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private serviceSolicitante: ServiceSolicitanteService, private router:Router) { }
  
  Formulario_login: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }
  );

  login(){
    console.log(this.Formulario_login.value);
    this.serviceSolicitante.login_solicitante(this.Formulario_login.value).subscribe((datos:any)=>{
      if(datos){
        this.serviceSolicitante.guardarToken_solicitante(datos.token);
        this.serviceSolicitante.guardaruser_solicitante(datos); 
        this.router.navigateByUrl('/trabajitos');

      }else{
        console.log("Error");
        
      }
    })  
  }

//   login() {
// /*     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Something went wrong!'
//     }),  */
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Bienvenido...',
//       showConfirmButton: false,
//       timer: 1500,
//     })
//     //this.router.navigateByUrl('/trabajitos');
//   }
}
