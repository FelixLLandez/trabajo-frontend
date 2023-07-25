<<<<<<< HEAD
import { Component } from '@angular/core';

interface SideNavToggle{
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle {
>>>>>>> origin/dashboard_Solicitante
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'trabajitos-angular';

  isSideNavCollapsed=false;
  screenWidth=0;


  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth= data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
=======
  isSideNavCollapsed = false;
  screenWidth = 0;
  showSidenav = false;

  constructor(private router: Router) {}

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  isExcludedRoute():boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login'  || currentRoute === '/registro';
  }

}
>>>>>>> origin/dashboard_Solicitante
