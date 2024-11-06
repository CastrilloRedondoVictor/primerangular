import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngularComponent } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsbindingComponent } from '../components/formsbinding/formsbinding.component';
import { FormsreferenceComponent } from '../components/formsreference/formsreference.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar/tabla-multiplicar.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngularComponent,
    DeportesComponent,
    FormsbindingComponent,
    FormsreferenceComponent,
    PruebaComponent,
    TablaMultiplicarComponent
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
