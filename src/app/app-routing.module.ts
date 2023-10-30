import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealViewComponent } from './components/meal-view/meal-view.component';
import { ListMealComponentComponent } from './components/list-meal-component/list-meal-component.component';

const routes: Routes = [
  {path:'meal/:id', component: MealViewComponent},
  {path:'home', component: ListMealComponentComponent},
  {path:'**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
