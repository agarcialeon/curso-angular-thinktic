import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  public valor: number;
  public miamarillo: string

  constructor() { }

  ngOnInit(): void {
    this.valor = Math.floor(Math.random() * 10);
    this.miamarillo = 'Yellow';
  }



}
