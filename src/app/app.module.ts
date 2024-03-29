import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';
import { NewMealComponent } from './components/new-meal/new-meal.component';
import { ListUserRecipesComponent } from './components/list-user-recipes/list-user-recipes.component';
import { ListDrinksComponent } from './components/list-drinks/list-drinks.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import { MealService } from './services/meal.service';
import { FormsModule } from '@angular/forms';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { FormFilterMealComponent } from './components/form-filter-meal/form-filter-meal.component';
import { FormFilterDrinkComponent } from './components/form-filter-drink/form-filter-drink.component';
import { InvalidSearchComponent } from './components/invalid-search/invalid-search.component';
import { HomeComponent } from './components/home/home.component';
import { ListFavouritesComponent } from './components/list-favourites/list-favourites.component';
import { CommentComponent } from './components/comment/comment.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    NewUserComponent,
    EditUserComponent,
    NewDrinkComponent,
    NewMealComponent,
    ListUserRecipesComponent,
    HomeComponent,
    ListDrinksComponent,
    DrinkViewComponent,
    ListMealComponentComponent,
    MealViewComponent,
    FormFilterMealComponent,
    FormFilterDrinkComponent,
    InvalidSearchComponent,
    ListFavouritesComponent,
    CommentComponent,
    ListCommentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
