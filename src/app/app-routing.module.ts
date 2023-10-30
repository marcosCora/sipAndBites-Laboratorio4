import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home', component: NewUserComponent},
  {path:'newUser', component: NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
