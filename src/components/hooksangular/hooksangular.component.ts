import {  Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooksangular',
  templateUrl: './hooksangular.component.html',
  styleUrl: './hooksangular.component.css',
})
export class HooksAngularComponent implements OnInit {

  public mensaje: string;

  constructor() {
    console.log('constructor')
    this.mensaje = 'aa'
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  cambiarMensaje(): void {
    this.mensaje = 'Cambiando en un click!!'
  }


}
