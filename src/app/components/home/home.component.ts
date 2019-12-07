import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient) {

    this.http.get('https://api.github.com/users')
    .subscribe( response => {
    })
   }

  ngOnInit() {
  }

}
