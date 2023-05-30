import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Food } from '../shared/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { 
    if(!localStorage.getItem('foods')) {
      let foods = [{
        "id": 1,
        "name": "Fishy Fishers",
        "image": "assets/f&C.jpg",
        "topdish":"Hake Parcel",
        "foodtype": "SeaFood",
        "rating": 4.3,
        "distance": 4,
        "price": 200,
        "time": 25,
      },
      {
        "id": 2,
        "name": "King Roadhouse",
        "image": "assets/burgers.jpg",
        "topdish":"Panda Burger",
        "foodtype": "BBQ & Grill",
        "rating": 4.7,
        "distance": 2.5,
        "price": 150,
        "time": 20,
      },
      {
        "id": 3,
        "name": "Pizzario Hub",
        "image": "assets/pizza.jpg",
        "topdish":"Supreme Pizza",
        "foodtype": "Pizzeria",
        "rating": 3.9,
        "distance": 2,
        "price": 180,
        "time": 15,
      },
      {
        "id": 4,
        "name": "Kung Fu Foodie",
        "image": "assets/asian.jpg",
        "topdish":"Chicken Chowmein",
        "foodtype": "Asian",
        "rating": 4.5,
        "distance": 5,
        "price": 250,
        "time": 30,
      }
     ]
     localStorage.setItem('foods', JSON.stringify(foods))
    }
}
  getFoods(): Observable<any[]> {
    let foods:any[] = []
    if (localStorage.getItem('foods'))
    {
      foods = JSON.parse(localStorage.getItem('foods')!)
    }
    return of(foods)
  }

  getFood(id:number): Observable<any>
  {
    let foods:Food[] = []

    if(localStorage.getItem('foods'))
    {
      foods = JSON.parse(localStorage.getItem('foods')!)
    }

    let food:any = foods.find(food => food.id === id)

    return of(food)
  }

  getItemArray(foods: string): any[]{
    const storedData = localStorage.getItem('foods');
    return storedData? JSON.parse(storedData) : [];
  }

  getItems(): any[] {
    const items = JSON.parse(localStorage.getItem('foods')!);
    return items ? items : [];
  }
}