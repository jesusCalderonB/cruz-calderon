import { HttpClient } from '@angular/common/http';
import { ProductsRepository } from './products.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogsResponseTO, ProductsCatalogsResponse } from '../entities/response.entities';

export class ProductsRepositoryImpl implements ProductsRepository {

    catalogsPath : string = "http://localhost:8080/catalogue?catId=";
    constructor(private http:HttpClient) { }

    getCatalogData(idCatalog:any): Observable<CatalogsResponseTO[]>{
        return this.http.get(this.catalogsPath+idCatalog).pipe(map<ProductsCatalogsResponse<CatalogsResponseTO>, CatalogsResponseTO[]>(entity => this.toModel(entity)));
    }

    toModel(entity: ProductsCatalogsResponse<CatalogsResponseTO>): CatalogsResponseTO[] {
        let list: CatalogsResponseTO[] = [];
        entity.payload.forEach(item => {
            list.push({
                id: item.id,
                key: item.key,
                nombre: item.nombre,
                descripcion: item.descripcion
            });
        });
        return list;
    }

}