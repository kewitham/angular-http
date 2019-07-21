import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }
  endpoint = 'https://www.googleapis.com/books/v1/users/101108906339499783209/bookshelves'
  searchendpoint = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getCategories(): Observable<any> {
    return this.http.get(this.endpoint + '?key=AIzaSyConcqJMJqJK4b234sol7lztTbYTeGK1dI').pipe(
      map(this.extractData));
  }

  getCategory(id): Observable<any> {
    return this.http.get(this.endpoint + '/' + id + '/volumes?key=AIzaSyConcqJMJqJK4b234sol7lztTbYTeGK1dI').pipe(
      map(this.extractData));
  }

  searchBook(searchterm): Observable<any>{
      return this.http.get(this.searchendpoint + searchterm + '&maxResults=10&orderBy=relevance&printType=books&key=AIzaSyConcqJMJqJK4b234sol7lztTbYTeGK1dI').pipe(
      map(this.extractData));
  }

  addVolume(volumeId): Observable<any>{
      return this.http.get(this.endpoint + '/1001/addVolume?key=AIzaSyConcqJMJqJK4b234sol7lztTbYTeGK1dI&volumeId=' + volumeId).pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
