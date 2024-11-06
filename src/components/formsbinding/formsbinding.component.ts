import { Component } from '@angular/core';

@Component({
  selector: 'app-formsbinding',
  templateUrl: './formsbinding.component.html',
  styleUrl: './formsbinding.component.css',
})
export class FormsbindingComponent {
  public user: any;
  public mensaje: string;

  constructor() {
    this.mensaje = '';
    this.user = {
      name: '',
      surname: '',
      age: 0
    }
  }

  getData(): void {
    this.mensaje = `Nombre: ${this.user.name}, Apellido: ${this.user.surname}, Edad: ${this.user.age}`;
  }
}
