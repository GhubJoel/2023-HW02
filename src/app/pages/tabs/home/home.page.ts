import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/food';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartPage } from '../cart/cart.page';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,MatSlideToggleModule,MatTableModule,MatFormFieldModule,MatButtonModule,MatIconModule,RouterModule]
})
export class HomePage implements OnInit {
  items:any
  cart: any[];
  displayedColumns: string[] = ['id','image','name','topdish','foodtype','rating','distance','price','time'];
  dataSource = new MatTableDataSource<Food>();
  constructor(private foodService: FoodService, private router: Router, private navController: NavController, private cartService: CartService) {
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
   }

  @ViewChild(MatSort) sort!: MatSort;
  

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((foods:any) => {this.dataSource.data = foods})
    this.items = this.foodService.getItems();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.
    dataSource.filter = filterValue.trim().toLowerCase();
  }

  addToCart(items: any) {
    this.cartService.addToCart(items);
    window.alert("Successfully Added To Cart");
  }

}
