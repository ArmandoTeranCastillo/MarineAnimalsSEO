import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/public/public-service';

@Component({
  selector: 'app-cellphonecases',
  templateUrl: './cellphonecases-component.html',
  styleUrls: ['../products/products-component.scss'],
})
export class CellphoneCasesComponent implements OnInit {
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
