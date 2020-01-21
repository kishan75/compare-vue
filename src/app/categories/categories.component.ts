import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "../http-request.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.httpRequestService.getCategories().subscribe(categories => this.categories = categories);
  }

}
