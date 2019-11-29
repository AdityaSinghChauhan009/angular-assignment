import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import { TabularComponentComponent } from './information-component/tabular-component/tabular-component.component';
import { Screen1Component } from './screen1/screen1.component';



const routes: Routes = [
  {path: 'home', component: AppComponent},
  { path: 'screen/:id', component: Screen1Component },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
