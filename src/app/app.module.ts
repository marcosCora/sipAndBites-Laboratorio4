import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';
import { NewMealComponent } from './components/new-meal/new-meal.component';
import { ListUserRecipesComponent } from './components/list-user-recipes/list-user-recipes.component';

import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import { MealServiceService } from './services/meal-service.service';
import { FormsModule } from '@angular/forms';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { FormFilterMealComponent } from './components/form-filter-meal/form-filter-meal.component';
import { FormFilterDrinkComponent } from './components/form-filter-drink/form-filter-drink.component';
import { InvalidSearchComponent } from './components/invalid-search/invalid-search.component';
import { HomeComponent } from './components/home/home.component';
import { CommentComponent } from './components/comment/comment.component';
import { ListCommentComponent } from './componets/list-comment/list-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ItemViewComponent,
    NewRecipeComponent,
    NewUserComponent,
    EditUserComponent,
    NewDrinkComponent,
    NewMealComponent,
    ListUserRecipesComponent,
    HomeComponent,
    ListDrinksComponent,
    ///showDrinkDetails,
    DrinkViewComponent,
    ListMealComponentComponent,
    MealViewComponent,
    FormFilterMealComponent,
    FormFilterDrinkComponent,
    InvalidSearchComponent,
    CommentComponent,
    ListCommentComponent
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
