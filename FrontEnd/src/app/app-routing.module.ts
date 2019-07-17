import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselComponent } from 'angular-bootstrap-md';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component : CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
