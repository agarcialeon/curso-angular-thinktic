import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../libros/libro.model';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css'],
})
export class LibroDetailComponent implements OnInit {
  public id: number;
  public libro: Libro;

  constructor(private route: ActivatedRoute, librosService: LibrosService) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    librosService.obtenerPorId(this.id);
      librosService.añadirLibroReciente(this.id);
  }

  ngOnInit(): void {}
}
