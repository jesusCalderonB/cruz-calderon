import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {BreadcrumbModule} from 'angular-crumbs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './V01/products/components/products/products.component';
import { TopBarComponent } from './V01/top-bar/topbar.component';
import {FooterComponent} from './V01/footer/footer.component';
import { HombresComponent } from './V01/hombres/hombres.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MujeresComponent } from './V01/mujeres/mujeres.component';
import { ItemDetallComponent } from './V01/item-detall/item-detall.component';
import { ComentariosComponent } from './V01/comentarios/comentarios.component';
import { RelacionadosComponent } from './V01/relacionados/relacionados.component';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';
// import { NotFoundComponent } from './not-found.component';

@NgModule({
  exports:[
    ProductsComponent
  ]
  ,declarations: [
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
    CarritoComponent,
    // NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
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
      { path:'carrito', component: CarritoComponent, data: { breadcrumn:'Mi carrito' }},
      // { path: '**', component: NotFoundComponent }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
