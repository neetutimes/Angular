import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { map, catchError } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getpost(url:any){
    return this.http.get(url)
    .pipe(
      map((response:any)=>{
        if(!response.hits){
            throw new Error('no hits');
        }
        return response.hits;
      })
    )

  }
}
