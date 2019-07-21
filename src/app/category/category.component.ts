import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items: any = [];
  categories: any = [];
  category: string[];

  constructor(public rest: ApiRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = [];
    this.rest.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.items = data as object[];
      this.categories = data["items"];
      this.category = this.categories["title"];
      console.log(this.category);
    });
  }

  add() {
    this.router.navigate(['/category-add']);
  }

}
