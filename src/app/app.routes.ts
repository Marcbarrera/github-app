import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';


export const ROUTES: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'users/:login', component: DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}


];