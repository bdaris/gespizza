import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaListComponent },
  { path: 'pizzas/:id', component: DetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

