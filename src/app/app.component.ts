import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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