import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/food';
import { MatIconModule } from '@angular/material/icon';
import { HomePage } from '../home/home.page';
import { CartService } from '../services/cart.service';
import { Location } from '@angular/common';
import { ExampleComponent } from '../../example.component';
import { ModalController } from '@ionic/angular';
import { Order, OrderService } from '../services/order.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatIconModule]
})
export class CartPage implements OnInit {
  cart: any[] = [];
  total: number;
  delivery = 50;
  items:any
  order: any[];
  constructor(private foodService: FoodService, private route: ActivatedRoute, private cartService: CartService, private location: Location,private modalController: ModalController, private orderService: OrderService) { 
    const cart = this.cartService.getCart();
    this.cart = cart.items;
    this.total = cart.total;
    this.order = JSON.parse(localStorage.getItem('order') ?? '[]');
  }

   ngOnInit(): void {
    const cart = this.cartService.getCart();
  }


  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }

  addToOrder(items: any) {
    this.orderService.addToOrder(items);
    window.alert("Successfully Added To Order");
  }

  
  async showPaymentSuccessModal() {
    const modal = await this.modalController.create({
      component: ExampleComponent,
      componentProps: {
        message: 'Payment success'
      }
    });
    await modal.present();
    
    this.cartService.clearCart();

  }

  doboth(items: any){
    this.orderService.addToOrder(items);
    this.showPaymentSuccessModal();
  }



}
