import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css',
})
export class DeportesComponent implements OnInit {

  public deportes: string[];
  public favorito: string;

  public numeros: number[];

  constructor() {
    this.deportes = ['Fútbol', 'Baloncesto', 'Boxeo', 'Petanca']
    this.favorito = ''
    this.numeros = [1,2,3,4,5,6,7,8]
  }

  setFavorito(dep: string): void {
    this.favorito = dep
  }

  ngOnInit(): void { }

}
