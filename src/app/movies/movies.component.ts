import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "../http-request.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [];
  constructor(private httpRequestService: HttpRequestService) {
  }

  ngOnInit() {
    this.httpRequestService.getMovies().subscribe(data => {
      this.movies = data;
      console.log(data[0]);
    });
  }

}
