import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { FormSectionComponent } from './home/form-section/form-section.component';
import { ServicesummaryComponent } from './home/servicesummary/servicesummary.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { ContacttopbarComponent } from './contact/contacttopbar/contacttopbar.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import {AppRoutingModule} from "./app-routing.model";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    TopbarComponent,
    FormSectionComponent,
    ServicesummaryComponent,
    HomeComponent,
    ContactComponent,
    ContacttopbarComponent,
    ContactFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
