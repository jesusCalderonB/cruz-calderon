import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './V01/top-bar/topbar.component';
import {FooterComponent} from './V01/footer/footer.component';
import {ProductsComponent} from './V01/products/components/products/products.component';
import {HombresComponent } from './V01/hombres/hombres.component';
import {MujeresComponent } from './V01/mujeres/mujeres.component';
import { MainComponent } from './main.component';
import { CarritoComponent } from './carrito/carrito.component';
import {CarritoRevisarComponent} from './carrito/carrito-revisar/carrito-revisar.component';
import {TotalCarComponent} from './carrito/total-car/total-car.component';
import { ItemDetallComponent } from './V01/item-detall/item-detall.component';
import {ContactoComponent} from './V01/contacto/contacto.component';
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
    {path: 'contacto',component: ContactoComponent},
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
