import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { GithubService } from  '../../services/github.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent  {

  constructor(private router: ActivatedRoute,
               private github: GithubService ) {

    this.router.params.subscribe(params => {
      this.getdetailuser(params['login']);

    });    
   }

   getdetailuser (login: string){
    this.github.getdetailuser (login)
          .subscribe (user => {
            console.log(user);
          });
   }



}
