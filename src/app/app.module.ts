import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerComponent,
} from 'ngx-extended-pdf-viewer';

import { AppComponent } from './app.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { LibrosComponent } from './libros/libros.component';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AboutComponent } from './about/about.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ReaderViewComponent } from './reader-view/reader-view.component';
import { HomeComponent } from './home/home.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { FavoritosComponent } from './libros/favoritos/favoritos.component';
import { RecientesComponent } from './libros/recientes/recientes.component';
import { LibroItemComponent } from './libros/libro-item/libro-item.component';

const rutas = [
  { path: 'home', component: HomeComponent },
  {
    path: 'biblioteca',
    component: LibrosComponent,
    children: [
      {
        path: 'todos',
        component: LibreriaComponent,
      },
      {
        path: 'favoritos',
        component: FavoritosComponent,
      },
      {
        path: 'recientes',
        component: RecientesComponent,
      },
    ],
  },
  { path: 'biblioteca/detalle/:id', component: LibroDetailComponent },
  { path: 'visor', component: ReaderViewComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    RandomNumberComponent,
    ColoresComponent,
    FirmaComponent,
    LibrosComponent,
    CabeceraComponent,
    AboutComponent,
    LibroDetailComponent,
    FooterComponent,
    ReaderViewComponent,
    HomeComponent,
    LibreriaComponent,
    FavoritosComponent,
    RecientesComponent,
    LibroItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    FontAwesomeModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
  ],
  exports: [NgxExtendedPdfViewerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
