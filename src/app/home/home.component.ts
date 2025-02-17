import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  donuts: any[] = [];

  constructor(private donutService: DonutService){}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(data => this.donuts = data.results);
  }

}
