import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-solicitante-rol-admin',
  templateUrl: './ver-solicitante-rol-admin.component.html',
  styleUrls: ['./ver-solicitante-rol-admin.component.css']
})
export class VerSolicitanteRolAdminComponent {
  items = Array(10).fill(0);

  constructor() {
   // main.ts
// main.ts
document.addEventListener("DOMContentLoaded", function () {
  const btnUp = document.getElementById("btnUp");

  if (btnUp) {
    btnUp.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", toggleButtonVisibility);
  }

  function scrollToTop() {
    if ("scrollTo" in window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.documentElement.scrollTop = 0;
    }
  }

  function toggleButtonVisibility() {
    const offset = 100; // Mostrar el botón cuando falten 100px para llegar al final de la página
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (btnUp) {
      if (scrollPosition > pageHeight - offset) {
        btnUp.classList.add("show");
      } else {
        btnUp.classList.remove("show");
      }
    }
  }
});



  }
}
