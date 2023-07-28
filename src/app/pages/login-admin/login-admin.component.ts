import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceAdministradorService } from '../../services/service-administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private fb: FormBuilder, private serviceAdmin: ServiceAdministradorService, private router:Router) { }
  
  Formulario_login: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }
  );

  login(){
    console.log(this.Formulario_login.value);
    this.serviceAdmin.login_administrador(this.Formulario_login.value).subscribe((datos:any)=>{
      if(datos){
        this.serviceAdmin.guardarToken_admistrador(datos.token);
        this.serviceAdmin.guardaruser_administrador(datos); 
        this.router.navigateByUrl('/ver-administradores');

      }else{
        console.log("Error");
        
      }
    })  
  }
}
