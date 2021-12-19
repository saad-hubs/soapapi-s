import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IFood } from './product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private apiService:ApiService) {
    }
    recipe:any[];
    foods:any[];
    food:IFood[];
    ingredients:any[];
    errorMessage=[];
  ngOnInit():void {
 
    this.apiService.getProducts().subscribe(
      products => {
        this.recipe = products.documents

        // this.food = this.recipe[0].fields.ingredients.arrayValue.values,
                  //  this.recipe.forEach((p,i)=>{
                  //       // this.food[i]=p.fields.foodName.stringValue;
                  //       console.log(p.fields.foodName.stringValue);
                  //     })
                  // console.log(this.recipe[0].name)
        // this.food = this.food.foodName.stringValue,
        // this.food = this.food.ingredients.arrayValue.values,
        // console.log(this.food[0]);
      },
      error => this.errorMessage =  <any>error
    );

  }
}
