import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutesService {
  constructor(
    private router: Router
  ) { }

  goToExperience(): void {
    this.router.navigate(['/experience']);
  }

  goToSkills(): void {
    this.router.navigate(['/skills']);
  }

  goToAbout(): void {
    this.router.navigate(['/about'])
  }


 goToContact(): void {
    this.router.navigate(['/contact'])
  }

}
