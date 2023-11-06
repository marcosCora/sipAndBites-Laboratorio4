import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';
import { NewMealComponent } from './components/new-meal/new-meal.component';
import { ListUserRecipesComponent } from './components/list-user-recipes/list-user-recipes.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'newUser', component: NewUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editUser', component: EditUserComponent},
  {path: 'newDrink', component: NewDrinkComponent},
  {path: 'newMeal', component: NewMealComponent},
  {path: 'userRecipes', component: ListUserRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
