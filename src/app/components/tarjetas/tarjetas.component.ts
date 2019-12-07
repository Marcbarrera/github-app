import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent  {

  @Input () items: any[]=[];

  constructor( private router: Router) { }

  veruser (items:any ) {
     console.log(items)

    this.router.navigate(['/users', items])

  }



}
