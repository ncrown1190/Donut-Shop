import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  addToCart(donut: any, quantity: number = 1): void {
    const index = this.cart.findIndex(item => item.donut.id === donut.id);
    if (index > -1) {
      this.cart[index].quantity += quantity;
    } else {
      this.cart.push({ donut, quantity });
    }
  }

  removeFromCart(donutId: number): void {
    this.cart = this.cart.filter(item => item.donut.id !== donutId);
  }

  getCart(): any[] {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalCalories(): number {
    return this.cart.reduce((total, item) => total + (item.donut.calories * item.quantity), 0);
  }
}
