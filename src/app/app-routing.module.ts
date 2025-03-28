import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'registration', component: RegistrationComponent }, // About page route
  { path: 'material', component: MaterialComponent }, // About page route
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
