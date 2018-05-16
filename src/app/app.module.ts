import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { InCartPipe } from './inCart.pipe';
import { CategoriesPipe } from './categories.pipe';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditBagComponent } from './edit-bag/edit-bag.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AboutComponent } from './about/about.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailComponent,
    CartComponent,
    InCartPipe,
    AdminComponent,
    EditBagComponent,
    CategoriesPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
