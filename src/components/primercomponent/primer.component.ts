import { Component } from '@angular/core';

@Component({
  selector: 'app-primercomponent',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})

export class PrimerComponent {
  public titulo: string;
  public descripcion: string;
  public anyo: number;

  constructor() {
    this.titulo = 'Hoy es miércoles'
    this.descripcion = 'no llueve'
    this.anyo = 2024
  }

}
