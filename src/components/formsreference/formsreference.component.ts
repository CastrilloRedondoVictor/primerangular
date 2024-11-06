import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formsreference',
  templateUrl: './formsreference.component.html',
  styleUrl: './formsreference.component.css',
})
export class FormsreferenceComponent {

  public suma: number;

  @ViewChild("inpNum1") cajaNum1Ref!: ElementRef;
  @ViewChild("inpNum2") cajaNum2Ref!: ElementRef;



  constructor() {
    this.suma = 0
    // this.cajaNum1Ref = new ElementRef(0)
    // this.cajaNum2Ref = new ElementRef(0)
  }

  submitForm(): void {
    let num1 = this.cajaNum1Ref.nativeElement.value
    let num2 = this.cajaNum2Ref.nativeElement.value

    this.suma = parseInt(num1) + parseInt(num2)
  }
 }
