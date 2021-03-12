import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faInfo,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-libro-item',
  templateUrl: './libro-item.component.html',
  styleUrls: ['./libro-item.component.css'],
})
export class LibroItemComponent implements OnInit {
  @Input() libro: Libro;
  @Output() favorited: EventEmitter<any> = new EventEmitter();
  public faEye: IconDefinition;
  public faInfo: IconDefinition;
  public farStar: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faEye = faEye;
    this.faInfo = faInfo;
    this.farStar = faStar;
  }

  /**
   * Marca el libro como favorito.
   * @param _libro
   */
  favorito(_libro) {
    this.favorited.emit(_libro);
    alert('Añadido a favoritos');
  }
}
