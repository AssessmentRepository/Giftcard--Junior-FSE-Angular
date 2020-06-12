import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceGiftCardOrderPageComponent } from './place-gift-card-order-page/place-gift-card-order-page.component';
import { ViewGiftCardOrdersComponent } from './view-gift-card-orders/view-gift-card-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login';
import { AdminComponent } from './admin/admin.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    PlaceGiftCardOrderPageComponent,
    ViewGiftCardOrdersComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [
    PlaceGiftCardOrderPageComponent,
    ViewGiftCardOrdersComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
    providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
