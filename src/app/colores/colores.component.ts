import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  public valor: number;
  public colorLocal: string;

  constructor() { }

  ngOnInit(): void {
    this.valor = Math.floor(Math.random() * 10);
  }

  generarRandom() : string{
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  colorHex() : string{
    this.colorLocal =  `#${this.generarRandom()}`;
    return this.colorLocal;
  }

}
