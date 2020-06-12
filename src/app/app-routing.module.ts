import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceGiftCardOrderPageComponent } from './place-gift-card-order-page/place-gift-card-order-page.component';
import { ViewGiftCardOrdersComponent } from './view-gift-card-orders/view-gift-card-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login//login.component';
import { AuthGuard } from './_guards';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: "landing-page", component: LandingPageComponent,canActivate: [AuthGuard]  },
  { path: "place-gift-card-order-page", component: PlaceGiftCardOrderPageComponent ,canActivate: [AuthGuard] },
  { path: "view-gift-card-orders", component: ViewGiftCardOrdersComponent, canActivate: [AuthGuard] },
  { path: "contact-us", component: ContactUsComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
