import { Component, OnInit } from '@angular/core';
import { Libro } from './libro.model';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {

  public cargando: boolean;
  public libros: Array<Libro>;
  public librosFavoritos: Array<Libro>;

  /**
   *
   * @param librosService
   */
  constructor(private librosService: LibrosService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.cargando = true;
    // this.cargarLibros();
    this.libros = [
      {
        id: 0,
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        imagen: "assets/"
      },
      { id: 1, titulo: 'Clean code', autor: 'Robert Cecil Martin', imagen: "assets/" },
      { id: 2, titulo: 'The pragmatic programmer', autor: 'Dave Thomas', imagen: "assets/" },
      { id: 3, titulo: 'The pragmatic programmer', autor: 'Dave Thomas', imagen: "assets/" },
      { id: 4, titulo: 'The pragmatic programmer', autor: 'Dave Thomas', imagen: "assets/" },
    ];
    this.cargando = false;
  }

  /**
   * Obtiene los libros del servicio correspondiente y los guarda en el componente
   */
  cargarLibros() {
    this.libros = this.librosService.obtenerTodos();
  }

  /**
   *
   * @param libro
   */
  mostrarAutor(libro): void {
    alert(`Escrito por ${libro.autor}`);
  }

  /**
   *
   * @param _libro
   */
  favorito(_libro){

    this.librosService.marcarLibroFavorito(_libro);
  }
}
