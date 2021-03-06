import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    NavbarComponent,
    TarjetasComponent,
    LoadingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
