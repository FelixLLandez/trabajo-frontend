import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceSolicitanteService } from '../../../../services/administrador-service/service-solicitante.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ver-solicitante-rol-admin',
  templateUrl: './ver-solicitante-rol-admin.component.html',
  styleUrls: ['./ver-solicitante-rol-admin.component.css']
})
export class VerSolicitanteRolAdminComponent implements OnInit{

  id_user: any;
  datos_solicitante: any = [];

  btnUp: HTMLElement | null = null;

  constructor(private route:ActivatedRoute, private serviceSolicitante: ServiceSolicitanteService, public modalRef: BsModalRef,) {}

  ngOnInit(): void {
    const btnUp = document.getElementById("btnUp");
    if (btnUp) {
      btnUp.addEventListener("click", this.scrollToTop); // Usar this.scrollToTop
      window.addEventListener("scroll", this.toggleButtonVisibility); // Usar this.toggleButtonVisibility
    }

    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.id_user = id;
    this.obtener_datos();
  }

  scrollToTop() {
    if ("scrollTo" in window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.documentElement.scrollTop = 0;
    }
  }

  toggleButtonVisibility() {
    const offset = 100; // Mostrar el botón cuando falten 100px para llegar al final de la página
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (this.btnUp) {
      if (scrollPosition > pageHeight - offset) {
        this.btnUp.classList.add("show");
      } else {
        this.btnUp.classList.remove("show");
      }
    }
  }

  items: any[] = [
    { nombre: 'Limpieza de hogar', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'reparacion de tubos', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'pasteleria', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'albañeria', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'plomeria', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'carpinteria', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'electricista', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'mecanico', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'panadero', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'plomeria', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { nombre: 'chofer', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  ];

  nombreBusqueda: string = '';

  obtenerItemsFiltrados() {
    if (!this.nombreBusqueda) {
      return this.items; // Si no hay búsqueda, muestra todos los elementos
    }
    return this.items.filter(item => item.nombre.toLowerCase().includes(this.nombreBusqueda.toLowerCase()));
  }

  obtener_datos() {
    this.serviceSolicitante.get_solic(this.id_user).subscribe((data: any) => {
      this.datos_solicitante = data;
    })
  }

  closeModal() {
    this.modalRef.hide();
  }

}

