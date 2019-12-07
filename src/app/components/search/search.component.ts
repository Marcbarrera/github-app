import { Component } from '@angular/core';
import { GithubService } from  '../../services/github.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  constructor(private github: GithubService) { }

  buscar(termino: string) {
     this.github.getUser(termino)
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas=data.items

      })
  }

}
