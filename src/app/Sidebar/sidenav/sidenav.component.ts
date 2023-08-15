import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { navbarData_solicitante } from './nav-data-solicitante';
import { Router } from '@angular/router';
import { ServiceAdministradorService } from '../../services/administrador-service/service-administrador.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  rol_user:any="";
  user_admin: any = {};
  id_rol: any = {};
  sidenav:any= false;
  nombre:any="";
  datos_perfil:any=[];
  foto_perfil:any;

  constructor(private router: Router, private serviceAdmin:ServiceAdministradorService) {
    this.user_admin = JSON.parse(localStorage.getItem('user') || 'null') || null;
    try{
      this.id_rol = this.user_admin.rol.id;
      this.rol_user=this.id_rol;
      this.nombre=this.user_admin.nombre;
      this.foto_perfil=this.user_admin.foto;

      this.sidenav=true;
    }catch (error){
      
      console.log('error');
    }
   
  }



  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  navbarData_solicitante=navbarData_solicitante;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.get_datos()
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  home_admin() {
    this.router.navigateByUrl('/ver-administradores')
  }

  home_solicitante() {
    this.router.navigateByUrl('/trabajitos')
  }

  get_datos() {
    this.serviceAdmin.get_datos_perfil().subscribe((data: any) => {
      this.datos_perfil = data;
      console.log(this.datos_perfil);
      
    })
  }


 



}
