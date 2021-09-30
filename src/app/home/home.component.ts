import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Array<any>
  

  constructor(private Recipe:RecipeService){
    this.data=new Array<any>()
  }

  getDataFromAPI(){
    this.Recipe.getRecipe().subscribe((data)=>{

      console.log(data)
      this.data=data

    })
  }

  ngOnInit(): void {

    this.getDataFromAPI()

  }

}
