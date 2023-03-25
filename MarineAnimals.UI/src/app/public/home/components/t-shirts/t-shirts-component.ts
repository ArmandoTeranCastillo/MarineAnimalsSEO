import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/public/public-service';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts-component.html',
  styleUrls: ['../products/products-component.scss'],
})
export class TShirtsComponent implements OnInit {
  products: any;

  constructor(private publicService: PublicService) {}

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
