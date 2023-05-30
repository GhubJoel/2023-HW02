import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Food } from '../shared/food';

export const Delivery = 50;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { 
    
  }

  addToCart(items: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(items);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  

  getCart(): { items: any[], total: number } {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let total = 0;

    cart.forEach((items: any) => {
      total += Number(items.price);
    });
    
    total += Delivery;

    return{ items: cart, total};
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}