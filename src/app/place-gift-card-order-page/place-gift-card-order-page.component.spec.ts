import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { PlaceGiftCardOrderPageComponent, Order } from './place-gift-card-order-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { UserService } from "../_services/user.service";
import {
  HttpModule,
} from "@angular/http";
import { HttpEvent, HttpEventType } from "@angular/common/http";

describe('PlaceGiftCardOrderPageComponent', () => {
  let component: PlaceGiftCardOrderPageComponent;
  let fixture: ComponentFixture<PlaceGiftCardOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceGiftCardOrderPageComponent],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule,
        HttpModule,
        RouterTestingModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceGiftCardOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty toBeFalsy()", () => {
    expect(component.orderForm.valid).toBeFalsy();
  });

  it("inr field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let inr = component.orderForm.controls["inr"];
    expect(inr.valid).toBeFalsy();

    // inr field is required
    errors = inr.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set inr to something
    inr.setValue(0);
    errors = inr.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set inr to something correct
    inr.setValue(1000);
    errors = inr.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("paisa field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let paisa = component.orderForm.controls["paisa"];
    expect(paisa.valid).toBeFalsy();

    // paisa field is required
    errors = paisa.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set paisa to something
    paisa.setValue(0);
    errors = paisa.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set paisa to something correct
    paisa.setValue(10);
    errors = paisa.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("recipientFname field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let recipientFname = component.orderForm.controls["recipientFname"];
    expect(recipientFname.valid).toBeFalsy();

    // recipientFname field is required
    errors = recipientFname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set recipientFname to something
    recipientFname.setValue("test");
    errors = recipientFname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set recipientFname to something correct
    recipientFname.setValue("testFirstName");
    errors = recipientFname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("recipientLname field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let recipientLname = component.orderForm.controls["recipientLname"];
    expect(recipientLname.valid).toBeFalsy();

    // recipientLname field is required
    errors = recipientLname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set recipientLname to something
    recipientLname.setValue("test");
    errors = recipientLname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set recipientLname to something correct
    recipientLname.setValue("testFirstName");
    errors = recipientLname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("streetaddress field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let streetaddress = component.orderForm.controls["streetaddress"];
    expect(streetaddress.valid).toBeFalsy();

    // streetaddress field is required
    errors = streetaddress.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set streetaddress to something
    streetaddress.setValue("test");
    errors = streetaddress.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set streetaddress to something correct
    streetaddress.setValue("#123 test address");
    errors = streetaddress.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("city field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let city = component.orderForm.controls["city"];
    expect(city.valid).toBeFalsy();

    // city field is required
    errors = city.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set city to something
    city.setValue("te");
    errors = city.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set city to something correct
    city.setValue("test");
    errors = city.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("state field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let state = component.orderForm.controls["state"];
    expect(state.valid).toBeFalsy();

    // state field is required
    errors = state.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set state to something
    state.setValue("te");
    errors = state.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set state to something correct
    state.setValue("test");
    errors = state.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("country field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let country = component.orderForm.controls["country"];
    expect(country.valid).toBeFalsy();

    // country field is required
    errors = country.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set country to something
    country.setValue("te");
    errors = country.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set country to something correct
    country.setValue("test");
    errors = country.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("pincode field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let pincode = component.orderForm.controls["pincode"];
    expect(pincode.valid).toBeFalsy();

    // pincode field is required
    errors = pincode.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set pincode to something
    pincode.setValue(0);
    errors = pincode.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set pincode to something correct
    pincode.setValue(123456);
    errors = pincode.errors || {};
    expect(errors["required"]).toBeFalsy();
  });
 
  it("buyerFname field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let buyerFname = component.orderForm.controls["buyerFname"];
    expect(buyerFname.valid).toBeFalsy();

    // buyerFname field is required
    errors = buyerFname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set buyerFname to something
    buyerFname.setValue("test");
    errors = buyerFname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set buyerFname to something correct
    buyerFname.setValue("testBuyerFName");
    errors = buyerFname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });
  
  it("buyerLname field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let buyerLname = component.orderForm.controls["buyerLname"];
    expect(buyerLname.valid).toBeFalsy();

    // buyerLname field is required
    errors = buyerLname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set buyerLname to something
    buyerLname.setValue("test");
    errors = buyerLname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set buyerLname to something correct
    buyerLname.setValue("testbuyerLname");
    errors = buyerLname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("phonenumber field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let phonenumber = component.orderForm.controls["phonenumber"];
    expect(phonenumber.valid).toBeFalsy();

    // phonenumber field is required
    errors = phonenumber.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set phonenumber to something
    phonenumber.setValue(0);
    errors = phonenumber.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set phonenumber to something correct
    phonenumber.setValue(9988776655);
    errors = phonenumber.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("email field validity .toBeFalsy() .toBeTruthy()", () => {
    let errors = {};
    let email = component.orderForm.controls["email"];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeTruthy();

    // Set email to something correct
    email.setValue("test@test.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
  });
  
  it("should be Place gift card order", inject([HttpTestingController, UserService], (httpMock: HttpTestingController, dataService: UserService) => {

    var data = {
      inr: 1000,
      paisa: 10,
      recipientFname: "testFirstName",
      recipientLname: "testLastName",
      streetaddress: "#123 test address",
      city: "test",
      state: "test",
      country: "test",
      pincode: "123456",
      buyerFname: "testBuyerFName",
      buyerLname: "testBuyerLName",
      phonenumber: 9988776655,
      email: "test@test.com"
    };
    dataService.postorderdata(data).subscribe(data => {
      expect(data).toEqual(data);
    });
  }));
});
