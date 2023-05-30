import { Injectable } from '@angular/core';


export const Delivery = 50;

export interface Order {
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    addToOrder(items: any) {
        let order = JSON.parse(localStorage.getItem('order') || '[]');
        order.push(items);
        localStorage.setItem('order', JSON.stringify(order));
      }

      getOrder(): { items: any[]} {
        const order = JSON.parse(localStorage.getItem('order') || '[]');
        return{ items: order};
      }

      clearOrder() {
        localStorage.removeItem('order');
      }
    
}