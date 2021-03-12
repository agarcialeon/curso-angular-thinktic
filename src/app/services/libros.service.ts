import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../libros/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private librosFavoritos: Array<Libro>;
  private librosRecientes: Array<Libro>;
  private librosDisponibles: Array<Libro>
  private errorHTTP = false;

  constructor(private $http: HttpClient) {
    this.librosFavoritos = [];
    this.librosRecientes = [];
    this.librosDisponibles = this.obtenerTodos();
  }

  /**
   * Obtiene el listado de libros a mostrar en el listado de libros.
   */
  obtenerTodos(): any {
    this.$http.get('assets/libros.json').subscribe(
      (response: Response) => {
        return response;
      },
      (response: Response) => {
        this.errorHTTP = true;
      }
    );
  }

  /**
   * Guarda un libro en la lista de favoritos
   * @param libro
   */
  marcarLibroFavorito(libro): void {
    this.librosFavoritos.push(libro);
  }

  /**
   *  Devuelve la lista de libros marcados como favoritos por el usuario
   */
  obtenerFavoritos(): any {
    return this.librosFavoritos;
  }

  /**
   * Añade un libro visto recientemente a la lista de libros recientes
   * @param libro
   */
  añadirLibroReciente(idLibro) {
    this.librosRecientes.push(this.librosRecientes.find((libro) => libro.id === idLibro));
  }

  /**
   *  Devuelve la lista de libros recientemente vistos
   */
  obtenerRecientes(): any {
    return this.librosRecientes;
  }

  obtenerPorId(idLibro){
    return this.librosDisponibles.find((libro) => libro.id === idLibro);
  }
}
