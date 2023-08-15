import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceSolicitanteService } from '../../../../services/administrador-service/service-solicitante.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

interface Trabajo {
  nombre: string;
  title: string;
  description: string;
  // Otras propiedades...
}

@Component({
  selector: 'app-ver-solicitante-rol-admin',
  templateUrl: './ver-solicitante-rol-admin.component.html',
  styleUrls: ['./ver-solicitante-rol-admin.component.css']
})
export class VerSolicitanteRolAdminComponent implements OnInit {

  id_user: any;
  datos_solicitante: any = [];
  task_solicitante:Trabajo[]=[];

  btnUp: HTMLElement | null = null;

  constructor(private route: ActivatedRoute, private serviceSolicitante: ServiceSolicitanteService, public modalRef: BsModalRef,) { }

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

  nombreBusqueda: string = '';

  obtenerItemsFiltrados() {
    if (!this.nombreBusqueda) {
      return this.task_solicitante; // Si no hay búsqueda, muestra todos los elementos
    }
    
    return this.task_solicitante.filter(item => {
      if (item.title) {
        return item.title.toLowerCase().includes(this.nombreBusqueda.toLowerCase());
      }
      return false;
    });
  }
  

  obtener_datos() {
    this.serviceSolicitante.get_solic(this.id_user).subscribe((data: any) => {
      this.datos_solicitante = data;
      this.task_solicitante=data.task;
      console.log(this.task_solicitante);
      
    })
  }

  closeModal() {
    this.modalRef.hide();
  }

  eliminartrabajito() {
    Swal.fire({
      title: 'Estás seguro de desactivar este trabajito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {



      }
    })
  }

}

