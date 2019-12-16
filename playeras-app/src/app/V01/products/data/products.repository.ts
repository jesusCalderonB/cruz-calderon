import { Observable } from 'rxjs';
import { CatalogsResponseTO } from '../entities/response.entities';

export interface ProductsRepository {
    getCatalogData(idCatalog:any): Observable<CatalogsResponseTO[]>;
}