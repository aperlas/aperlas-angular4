import { MatCardModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
//import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { SchoolsComponent } from './education/schools/schools.component';
import { CompanyComponent } from './experience/company/company.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    SchoolsComponent,
    CompanyComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule
   // Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* 
<a pageScroll href="#home">Testing</a>
<div id="home">
*/