import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public libros: Array<Libro>;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerFavoritos();
  }

}
