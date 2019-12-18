import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import {ProductsComponent} from './products/products.component';
import {HombresComponent } from './hombres/hombres.component';
import {MujeresComponent } from './mujeres/mujeres.component';
import { MainComponent } from './main.component';
import { ItemDetallComponent } from './item-detall/item-detall.component';
import { CarritoComponent } from './carrito/carrito.component';
import {CarritoRevisarComponent} from './carrito/carrito-revisar/carrito-revisar.component';
import {TotalCarComponent} from './carrito/total-car/total-car.component';
// import {NotFoundComponent} from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path:'detalle-producto', component: ItemDetallComponent },
  {path: 'topbar',component: TopBarComponent, children :
  [
    {path: 'products',component: ProductsComponent},
    {path: 'hombres',component: HombresComponent},
    {path: 'mujeres',component: MujeresComponent},
    {path: 'main',component: MainComponent},
  ]
  },
  {path: 'carrito',component: CarritoComponent, children:
  [
    {path: 'carrito-revisar',component: CarritoRevisarComponent},
  ]
},
  {path: 'footer',component: FooterComponent},
// { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
