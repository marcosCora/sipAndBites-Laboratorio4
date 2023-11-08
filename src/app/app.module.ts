import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import { MealServiceService } from './services/meal-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { FormFilterMealComponent } from './components/form-filter-meal/form-filter-meal.component';
import { FormFilterDrinkComponent } from './components/form-filter-drink/form-filter-drink.component';
import { InvalidSearchComponent } from './components/invalid-search/invalid-search.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    ItemViewComponent,
    NewRecipeComponent,
    ListDrinksComponent,
    ///showDrinkDetails,
    DrinkViewComponent,
    ListMealComponentComponent,
    MealViewComponent,
    FormFilterMealComponent,
    FormFilterDrinkComponent,
    InvalidSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [MealServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
