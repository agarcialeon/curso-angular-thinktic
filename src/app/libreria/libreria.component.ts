import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Libro } from '../libros/libro.model';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  public libros: Array<Libro>;
  @Output() favorited: EventEmitter<any> = new EventEmitter();

  constructor(private librosService: LibrosService) {}

  /**
   *
   */
  async ngOnInit(): Promise<void> {
    this.libros = [];
    this.libros = [
      {
        id: 1,
        titulo: 'Te veré bajo el hielo',
        autor: 'Robert Bryndza',
        imagen: "assets/covers/te veré bajo el hielo.jpg"
      },
      {
        id: 2,
        titulo: 'Dime quién soy',
        autor: 'Julia Navarro',
        imagen: "assets/covers/dime quien soy.jpg"
      },
      {
        id: 3,
        titulo: 'Harry potter y la piedra filosofal',
        autor: 'J. K. Rowling',
        imagen: "assets/covers/harry potter.jpg"
      },
      {
        id: 4,
        titulo: 'The pragmatic programmer',
        autor: 'Andrew Hunt',
        imagen: "assets/covers/pragmatic programmer.jpg"
      }
    ];
    //this.libros = await this.librosService.obtenerTodos();
  }

  hayLibros(): boolean {
    return this.libros.length > 0;
  }

  /**
   *
   */
  favorito(_libro) {
    this.librosService.marcarLibroFavorito(_libro);
  }
}
