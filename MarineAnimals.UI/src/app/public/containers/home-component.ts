import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PublicService } from '../public-service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any;

  constructor(
    private publicService: PublicService,
    private viewPort: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchCategories();
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
