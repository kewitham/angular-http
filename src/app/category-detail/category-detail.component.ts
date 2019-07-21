import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  items: any = [];
  category: any = [];
  volumeInfo: any = [];
  imageLinks: any = [];
  authors: any = [];
  title: string[];
  description: string[];
  thumbnail: string[];
  ourCategory: string[];

  constructor(public rest:ApiRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCategory()

    this.ourCategory = this.route.snapshot.params['title'];
    console.log(this.ourCategory);

}

getCategory(){
    this.category = [];
    this.rest.getCategory(this.route.snapshot.params['id']).subscribe((data: {}) => {
     // console.log(data);
      this.items = data as object[];
      this.category = data["items"];
     // console.log(this.category);
      for (let i = 0; i < this.category.length; i++) {
      this.volumeInfo = this.category[i].volumeInfo;
    //  console.log(this.volumeInfo);
      this.title = this.volumeInfo["title"];
    //  console.log(this.title);
      this.authors = this.volumeInfo.authors[0];
      this.description = this.volumeInfo["description"];
      this.thumbnail = this.volumeInfo.imageLinks["thumbnail"];
      }
    });
  }

}