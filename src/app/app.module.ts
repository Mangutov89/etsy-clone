import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListStoreItemsComponent } from './list-store-items/list-store-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ListStoreItemsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
