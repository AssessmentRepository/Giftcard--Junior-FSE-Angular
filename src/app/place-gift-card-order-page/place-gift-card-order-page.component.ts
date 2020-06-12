import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../_services";

export class Order {
  constructor(
    public inr: number,
    public paisa: number,
    public recipientFname:string,
    public recipientLname:string,
    public streetaddress:string,
    public city:string,
    public state: string,
    public country: string,
    public pincode:number,
    public buyerFname:string,
    public buyerLname:string,
    public phonenumber:number,
    public email: string
  ) { }
}
@Component({
  selector: 'app-place-gift-card-order-page',
  templateUrl: './place-gift-card-order-page.component.html',
  styleUrls: ['./place-gift-card-order-page.component.css']
})
export class PlaceGiftCardOrderPageComponent implements OnInit {
  @Output() orderdata = new EventEmitter<Order>();
  orderForm: FormGroup;
  public obj: any = {};
  constructor(private fb: FormBuilder,private userService: UserService) { }
  orderData:any;
  ngOnInit() {
    this.orderForm = this.fb.group({
      inr: ["",[Validators.required]],
      paisa: ["",[Validators.required]],
      recipientFname:["",[Validators.required]],
      recipientLname:["",[Validators.required]],
      streetaddress:["",[Validators.required]],
      city:["",[Validators.required]],
      state: ["",[Validators.required]],
      country: ["",[Validators.required]],
      pincode:["",[Validators.required]],
      buyerFname:["",[Validators.required]],
      buyerLname:["",[Validators.required]],
      phonenumber:["",[Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]]
    });
  }


  onSubmit() {
    this.obj = { ...this.orderForm.value, ...this.obj };
    this.orderForm.value;

 
      if (this.orderForm.valid) {
        this.orderdata.emit(
          new Order(
            this.orderForm.value.inr,
            this.orderForm.value.paisa,
            this.orderForm.value.recipientFname,
            this.orderForm.value.recipientLname,
            this.orderForm.value.streetaddress,
            this.orderForm.value.city,
            this.orderForm.value.state,
            this.orderForm.value.country,
            this.orderForm.value.pincode,
            this.orderForm.value.buyerFname,
            this.orderForm.value.buyerLname,
            this.orderForm.value.phonenumber,
            this.orderForm.value.email
          )
        );
    }
    var data =  this.orderForm.value;
    this.userService.postorderdata(data).subscribe(
      data => {
         this.orderData = data;
      },
      error => {
        console.log("LOG: LoginComponent -> onSubmit -> error", error);
      }
    );
  }

}
