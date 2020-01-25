import { Component, Input } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {

  @Input() public sidenav: MatSidenav;

  constructor(
    private routesService: RoutesService
  ) { }

  goToAbout(): void {
    this.routesService.goToAbout();
    this.sidenav.close();
  }

  goToExperience(): void {
    this.routesService.goToExperience();
    this.sidenav.close();
  }

  goToContact(): void {
    this.routesService.goToContact();
    this.sidenav.close();
  }
}
