import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  items: any = [];
  searchTerm: any;
  queryField: FormControl = new FormControl();
  category: any = [];
  volumeInfo: any = [];
  imageLinks: any = [];
  authors: any = [];
  title: string[];
  description: string[];
  thumbnail: string[];
  volumeId: any = [];

  constructor(public rest:ApiRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.queryField.valueChanges
    
      .pipe(debounceTime(200))
      .pipe(distinctUntilChanged())
    //  .pipe(switchMap((query) =>  this.rest.searchBook(query)))
      .subscribe(queryField =>this.rest.searchBook(queryField).subscribe(data=>{ 
        if(!queryField){console.log('nothing here');return;}else{
       console.log(data);
         this.items = data as object[];
      this.category = data["items"];
     // console.log(this.category);
      for (let i = 0; i < this.category.length; i++) {
      this.volumeInfo = this.category[i].volumeInfo;
    //  console.log(this.volumeInfo);
    this.volumeId = this.category[i].id;
    console.log(this.volumeId)
      this.title = this.volumeInfo["title"];
    //  console.log(this.title);
      this.authors = this.volumeInfo.authors[0];
      this.description = this.volumeInfo["description"];
      this.thumbnail = this.volumeInfo.imageLinks["thumbnail"];
      }
        }
        }));
    
  }

    addVolume(id){
      this.rest.addVolume(this.volumeId).subscribe(data=>{
        console.log(data);
          console.log('added');
      console.log(this.volumeId);
      })
    
      };
  

}

