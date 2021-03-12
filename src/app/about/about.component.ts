import { Component, OnInit } from '@angular/core';
import { LibraryUsed } from './library-used.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public license: string;
  public author: string;
  public version: string;
  public librariesUsed: Array<LibraryUsed>;

  constructor() {

    this.license = 'MIT';
    this.author = 'Álvaro García León';
    this.version = '1.0.0';
    this.librariesUsed = [
      new LibraryUsed('Angular', 'Framework front-end'),
      new LibraryUsed('Boostrap', 'Librería de estilos CSS'),
      new LibraryUsed('Ngx-extended-pdf-viewer', 'Lector PDF')
    ];

  }

  ngOnInit(): void {
  }

}
