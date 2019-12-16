import { Injectable } from '@angular/core';
import { ProductsRepository } from '../data/products.repository';
import { ProductsRepositoryFactory } from '../data/products.repository.factory';
import { CatalogsResponseTO } from '../entities/response.entities';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

    private productsRepository : ProductsRepository;

    constructor(private productsRepositoryFactory: ProductsRepositoryFactory){
        this.productsRepository = productsRepositoryFactory.getInstance();
    }

    getCatalogsInfo(idCatalogue:any):Observable<CatalogsResponseTO[]>{
        return this.productsRepository.getCatalogData(idCatalogue);
    }

}