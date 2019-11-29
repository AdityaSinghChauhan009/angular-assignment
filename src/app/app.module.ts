import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponentComponent } from './information-component/information-component.component';

import { ActionComponentComponent } from './information-component/action-component/action-component.component';
import { FilterComponentComponent } from './information-component/filter-component/filter-component.component';
import { TabularComponentComponent } from './information-component/tabular-component/tabular-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangecolourDirective } from './information-component/changecolour.directive';
import { Screen1Component } from './screen1/screen1.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponentComponent,
    ActionComponentComponent,
    FilterComponentComponent,
    TabularComponentComponent,
    ChangecolourDirective,
    Screen1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
