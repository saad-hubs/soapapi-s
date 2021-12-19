import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import  {tap,catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productUrl = 'https://firestore.googleapis.com/v1/projects/crumbz-final/databases/(default)/documents/Food';

    constructor(private http: HttpClient){}
    fields;
    foods;

     getProducts():Observable<any>{
         return this.http.get<any>(this.productUrl).pipe(
            //  tap(data => console.log('All: ' + JSON.stringify(data))),
             catchError(this.handleError)
         );
     }

    //  getRecipes(){
    //        this.getProducts().subscribe(products=>{
    //           this.fields = products.documents;
    //           console.log(this.fields);
    //         });
           
    //   }



     private handleError(err: HttpErrorResponse){
        //  in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            // A client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }else{
            // The backend returned an unsuccessful response code.
            //  The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status},error message is : ${err.message}`;             
        }
        console.error(errorMessage);
        return throwError(errorMessage);
     }
}