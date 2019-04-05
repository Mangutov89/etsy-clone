import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { StoreItemsComponent } from './store-items/store-items.component';
import { StorepageComponent } from './storepage/storepage.component';
import { ItempageComponent } from './itempage/itempage.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreItemsComponent,
    StorepageComponent,
    ItempageComponent,
    ItemEditComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
