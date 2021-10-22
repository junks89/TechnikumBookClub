import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { BookoverviewComponent } from './bookoverview/bookoverview.component'; 

const routes: Routes = [

  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'overview', component: BookoverviewComponent }, 
  { path: 'login', component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: '**', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, /*{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
