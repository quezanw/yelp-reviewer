import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
    {path:'', redirectTo: 'restaurants', pathMatch: 'full'},
    {path:'restaurants', component: HomeComponent},
    {path:'restaurants/new', component: AddComponent},
    {path:'restaurants/:id', component: ViewComponent},
    {path:'restaurants/:id/review', component: AddReviewComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
