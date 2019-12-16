export interface ProductsCatalogsResponse<T> {
	success:boolean;
	code:number;
	payload: T[];
	messages:string[];
}

export interface CatalogsResponseTO {
    id:number;
	key:string;
	nombre:string;
	descripcion:string;
}