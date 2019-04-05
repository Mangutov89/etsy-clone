import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { StoreItemsComponent } from './store-items/store-items.component';
import { StorepageComponent } from './storepage/storepage.component';
import { ItempageComponent } from './itempage/itempage.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AboutComponent } from './about/about.component';
import { StoreOwnerComponent } from './store-owner/store-owner.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StoreItemsComponent,
    StorepageComponent,
    ItempageComponent,
    ItemEditComponent,
    AboutComponent,
    StoreOwnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
