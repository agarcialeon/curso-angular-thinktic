import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css']
})
export class RecientesComponent implements OnInit {

  public libros: Array<Libro>;

  /**
   *
   */
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros.push(this.librosService.obtenerRecientes());
  }

}
