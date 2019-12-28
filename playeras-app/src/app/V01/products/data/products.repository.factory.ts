import { Factory } from '../../utils/common/data/Factory';
import { HttpClient } from '@angular/common/http';
import { ProductsRepositoryImpl } from './products.repository.impl';
import { ProductsRepository } from './products.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ProductsRepositoryFactory implements Factory<ProductsRepository>{

    private mockProvider: boolean = false;//environment.mockProvider;

    constructor(
      private http: HttpClient
    ) { }

    getInstance(): ProductsRepository {
        return this.mockProvider ? null : new ProductsRepositoryImpl(this.http);
    }

}