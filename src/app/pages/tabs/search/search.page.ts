import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/food';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,MatSlideToggleModule,MatTableModule,MatFormFieldModule,MatInputModule]
})
export class SearchPage implements OnInit {
  items: any[];
  searchTerm!: string;
  cart: any[];
  displayedColumns: string[] = ['id','image','name', 'topdish','foodtype','rating','distance','price','time'];
  dataSource = new MatTableDataSource<Food>();
  constructor(private foodService: FoodService, private router: Router, private cartService: CartService) { 
    this.items = this.foodService.getItems();
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  }
  
  

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((foods:any) => {this.dataSource.data = foods})
    this.items = this.foodService.getItems();
  }


  filterItems() {
    return this.items.filter(item => {
      const name = item.name ? item.name.toLowerCase() : '';
      const price = item.price ? item.price.toString() : '';
      const distance = item.distance ? item.distance.toString() : '';
      const rating = item.rating ? item.rating.toString() : '';
  
      return (
        name.includes(this.searchTerm.toLowerCase()) ||
        price.includes(this.searchTerm) ||
        distance.includes(this.searchTerm) ||
        rating.includes(this.searchTerm)
      );
    });
  }

  addToCart(items: any) {
    this.cartService.addToCart(items);
    window.alert("Successfully Added To Cart");
  }

 

}
