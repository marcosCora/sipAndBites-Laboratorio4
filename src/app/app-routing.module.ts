import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'newUser', component: NewUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editUser', component: EditUserComponent},
  {path: 'listDrinks', component: ListDrinksComponent},
  {path: 'listMeals', component: ListMealComponentComponent},
  {path: 'drink/:id', component: DrinkViewComponent},
  {path:'meal/:id', component: MealViewComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
