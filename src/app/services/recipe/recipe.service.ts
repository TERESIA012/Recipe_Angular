import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  

  constructor(private http:HttpClient) { }

  getRecipe():Observable<any> {


    let url = "http://localhost:5000/recipes"
    
    return this.http.get<any>(url)

  }
  


  getSingleRecipe(node_id){
   
    let sourceUrl = "http://localhost:5000/recipe"

    return this.http.get<any>(sourceUrl) + node_id
  }

}