import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/public/public-service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups-component.html',
  styleUrls: ['../products/products-component.scss'],
})
export class CupsComponent implements OnInit {
  products: any;

  constructor(
    private publicService: PublicService,
    private viewPort: ViewportScroller
  ) {}

  ngOnInit() {
    this.fetchProducts();
    this.resetScroll();
  }

  resetScroll() {
    var element = document.getElementById('title');
    if (element) {
      console.log(element);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  fetchProducts() {
    this.publicService.fetchProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
