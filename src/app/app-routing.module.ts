import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";//"./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  // { path: 'hello', redirectTo: ''}
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true}

     //{ enableTracing: true }  // This is for debugging only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
