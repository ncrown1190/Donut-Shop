import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalCalories: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalCalories = this.cartService.getTotalCalories();
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
    this.ngOnInit(); // Refresh the cart details
  }

}
