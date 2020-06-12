import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from './_services';
import { User } from './_models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSPA';
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === "Admin";
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  adminpage() {
    this.router.navigateByUrl("admin");
  }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeGiftcardorderpage() {
    this.router.navigateByUrl("place-gift-card-order-page");
  }
  viewGiftCardorderspage() {
    this.router.navigateByUrl("view-gift-card-orders");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }
}
