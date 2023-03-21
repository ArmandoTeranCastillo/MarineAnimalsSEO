import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse} from "@angular/common/http"
import { catchError, Observable, of, tap, throwError } from "rxjs";




@Injectable()
export class PublicService {

    products: any;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        return this.http.get('/api/products').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    fetchProducts(): Observable<any>{
        if(!this.products){
            return this.http.get('/api/products').pipe(
                tap(response => this.products = response)
            )
        }else{
            return of(this.products)
        }
    }
    

    private handleError(error: HttpErrorResponse){
        const msg = error.error;
        return throwError(msg);
    }

}