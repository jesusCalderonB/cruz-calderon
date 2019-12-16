import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './V01/top-bar/topbar.component';
import {FooterComponent} from './V01/footer/footer.component';
import {ProductsComponent} from './V01/products/components/products/products.component';
import {HombresComponent } from './V01/hombres/hombres.component';
import {MujeresComponent } from './V01/mujeres/mujeres.component';
import { MainComponent } from './main.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ItemDetallComponent } from './V01/item-detall/item-detall.component';
// import {NotFoundComponent} from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  {path:'detalle-producto', component: ItemDetallComponent},
  {path: 'topbar',component: TopBarComponent, children :
  [
    {path: 'products',component: ProductsComponent},
    {path: 'hombres',component: HombresComponent},
    {path: 'mujeres',component: MujeresComponent},
    {path: 'main',component: MainComponent},
  ]
  },
  {path: 'carrito',component: CarritoComponent},
  {path: 'footer',component: FooterComponent},
// { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
