import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient){
    console.log('holaaaaaaaaa');
  }

  getUser(termino: string) {

    return this.http.get(`https://api.github.com/search/users?q=${termino}&per_page=100`)
    
  }

  getdetailuser(login: string) {

    return this.http.get(`https://api.github.com/users/${login}`)
    
  }
}
