import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../donut.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-donut-detail',
  standalone: false,
  templateUrl: './donut-detail.component.html',
  styleUrl: './donut-detail.component.css',
})
export class DonutDetailComponent implements OnInit {
  donut: any;

  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.donutService
      .getDonutDetails(id)
      .subscribe((data) => (this.donut = data));
  }

  addToCart(): void {
    this.cartService.addToCart(this.donut);
  }
}
