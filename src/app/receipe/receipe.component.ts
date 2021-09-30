import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe/recipe.service'

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  data:Array<any>;
  node_id;

  constructor(private Recipe:RecipeService) { 
    this.data=new Array<any>()
  }

  getIdFromApi(node_id){
    this.Recipe. getSingleRecipe(node_id).subscribe((data)=>{
      console.log(data)
    })
  }



  ngOnInit(): void {
    
  }

}
