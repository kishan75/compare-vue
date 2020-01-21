import { Component } from '@angular/core';
import { HttpRequestService } from "./http-request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compare-vue';
  categories = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.httpRequestService.getCategories().subscribe(categories => this.categories = categories);
  }
}
