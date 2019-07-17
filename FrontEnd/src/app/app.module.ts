import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowsComponent } from './shows/shows.component';
import { ArtistsComponent } from './artists/artists.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarousselComponent,
    NavbarComponent,
    ShowsComponent,
    ArtistsComponent,
    TicketsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
