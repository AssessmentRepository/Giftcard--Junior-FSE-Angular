import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from "../_services";
@Component({
  selector: 'app-view-gift-card-orders',
  templateUrl: './view-gift-card-orders.component.html',
  styleUrls: ['./view-gift-card-orders.component.css']
})
export class ViewGiftCardOrdersComponent implements OnInit {

  constructor(private userService: UserService) { }

  orderData:any;

  ngOnInit() {
    this.getorder();
  }
  getorder() {
    this.userService.getorderdata().subscribe(
      data => {
         this.orderData = data;
      },
      error => {
        console.log("LOG: LoginComponent -> onSubmit -> error", error);
      }
    );
  }
 

}
