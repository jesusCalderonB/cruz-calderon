import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {BreadcrumbModule} from 'angular-crumbs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopBarComponent } from './top-bar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import { HombresComponent } from './hombres/hombres.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MujeresComponent } from './mujeres/mujeres.component';
import { ItemDetallComponent } from './item-detall/item-detall.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { RelacionadosComponent } from './relacionados/relacionados.component';
// import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopBarComponent,
    FooterComponent,
    HombresComponent,
    MainComponent,
    MujeresComponent,
    ItemDetallComponent,
    ComentariosComponent,
    RelacionadosComponent,
    // NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgbModule],
    BrowserModule,
    BreadcrumbModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'main',component: MainComponent},
      { path: 'hombres', component: HombresComponent, data: { breadcrumb: 'Hombres'} },
      { path: 'mujeres', component: MujeresComponent, data: { breadcrumb: 'Mujeres'} },
      { path: 'productos',component: ProductsComponent, data: { breadcrumb: 'Productos'}},
      { path:'detalle-producto', component: ItemDetallComponent, data: { breadcrumn:'Detalle' }},
      // { path: '**', component: NotFoundComponent }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
