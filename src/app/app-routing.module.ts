import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { HomeComponent } from './components/home/home.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';
import { NewMealComponent } from './components/new-meal/new-meal.component';
import { ListUserRecipesComponent } from './components/list-user-recipes/list-user-recipes.component';


import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';
import { ListFavouritesComponent } from './components/list-favourites/list-favourites.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'newUser', component: NewUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editUser', component: EditUserComponent},
  {path: 'newDrink', component: NewDrinkComponent},
  {path: 'newMeal', component: NewMealComponent},
  {path: 'userRecipes', component: ListUserRecipesComponent},
  {path: 'listDrinks', component: ListDrinksComponent},
  {path: 'listMeals', component: ListMealComponentComponent},
  {path: 'drink/:id', component: DrinkViewComponent},
  {path:'meal/:id', component: MealViewComponent},
  {path:'userFavourites', component: ListFavouritesComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
