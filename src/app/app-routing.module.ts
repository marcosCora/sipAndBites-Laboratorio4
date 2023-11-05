import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'newUser', component: NewUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editUser', component: EditUserComponent},
  {path: 'newDrink', component: NewDrinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
