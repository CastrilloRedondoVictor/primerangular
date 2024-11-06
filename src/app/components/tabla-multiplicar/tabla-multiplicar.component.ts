import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tabla-multiplicar.component.html',
  styleUrl: './tabla-multiplicar.component.css'
})
export class TablaMultiplicarComponent {

  public numero!: number;
  public resultados: number[];
  @ViewChild("inpNum") inpNum!: ElementRef;

  constructor() {
    this.resultados = []
  }


  submitForm() {
    let num = this.inpNum.nativeElement.value
    this.numero = num
    this.resultados = []
    for (let i = 0; i < 11; i++) {
      this.resultados.push(parseInt(num) * i)
    }
  }

}
