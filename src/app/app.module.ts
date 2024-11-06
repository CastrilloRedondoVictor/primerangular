import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngularComponent } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsbindingComponent } from '../components/formsbinding/formsbinding.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngularComponent,
    DeportesComponent,
    FormsbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
