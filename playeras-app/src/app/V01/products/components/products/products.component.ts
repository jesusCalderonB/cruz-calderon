import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'productos',
  templateUrl: '/products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'Productos';
  config: any;
  collection = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.loadCatalogs();
    this.config = {
    currentPage: 1,
    itemsPerPage: 16,
    totalItems:0
    };
    route.queryParams.subscribe(params => this.config.currentPage= params['page']?params['page']:1 );
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
 
  pageChange(newPage: number) {
    this.router.navigate(['./productos'], { queryParams: { page: newPage } });
  }

  loadCatalogs(){
    console.log("Entro a loadCatalogs");
    /*this.productsService.getCatalogsInfo(1).subscribe(data => {
      console.log(JSON.stringify("Informacion desde servicio: " +data));
    });*/
  }

}