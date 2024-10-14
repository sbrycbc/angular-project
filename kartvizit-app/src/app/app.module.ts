import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
   
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   MatToolbarModule,
   MatSnackBarModule

  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: 'apiUrl',
      useValue: 'https://demo.limantech.com/cards/public/api'
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }