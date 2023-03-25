import { Component, OnInit } from '@angular/core';
import { PublicService } from './public-service';

@Component({
  selector: 'app-public',
  templateUrl: './public-component.html',
  styleUrls: ['./public-component.scss'],
})
export class PublicComponent implements OnInit {
  products: any;
  categories: any;

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.publicService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.publicService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
