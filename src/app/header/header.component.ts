import { Component, Input } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Input() public sidenav: MatSidenav;

  public width: number;

  constructor(
    private routesService: RoutesService,
  ) {
    this.width = window.screen.width;
  }

  showButtons(): boolean {
    return this.width > 580;
  }

  goToExperience(): void {
    this.routesService.goToExperience();
  }

  goToContact(): void {
    this.routesService.goToContact();
  }

  goToAbout(): void {
    this.routesService.goToAbout();
  }
}
