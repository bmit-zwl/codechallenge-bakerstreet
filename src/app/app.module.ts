import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'; 


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PackingOptionComponent } from './components/packing-option/packing-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDialogSuccessComponent } from './components/contact-dialog-success/contact-dialog-success.component';
import { TosComponent } from './pages/tos/tos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ProductsComponent,
    ProductComponent,
    PackingOptionComponent,
    ContactComponent,
    ContactDialogSuccessComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
