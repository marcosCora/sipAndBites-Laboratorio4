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
import { MealServiceService } from './services/meal-service.service';
import { FormsModule } from '@angular/forms';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    ItemViewComponent,
    NewRecipeComponent,
    ListDrinksComponent,
    ListMealComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [MealServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
