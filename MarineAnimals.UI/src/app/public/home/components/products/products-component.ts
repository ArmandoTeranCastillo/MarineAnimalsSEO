import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/public/public-service';

@Component({
  selector: 'app-products',
  templateUrl: './products-component.html',
  styleUrls: ['./products-component.scss'],
})
export class ProductsComponent implements OnInit {
  categories: any;

  constructor(
    private publicService: PublicService,
    private viewPort: ViewportScroller
  ) {}

  ngOnInit() {
    this.fetchCategories();
    this.resetScroll();
  }

  resetScroll() {
    var element = document.getElementById('title');
    if (element) {
      console.log(element);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  fetchCategories() {
    this.publicService.fetchCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
