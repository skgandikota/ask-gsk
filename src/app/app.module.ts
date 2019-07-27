import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactDetailsComponent } from './components/Header/contact-details/contact-details.component';
import { NavigationBarComponent } from './components/Header/navigation-bar/navigation-bar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactDetailsComponent, NavigationBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
