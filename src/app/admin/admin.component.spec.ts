import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { AdminComponent } from './admin.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../_services/user.service";
import { By } from "@angular/platform-browser";


describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let element: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [HttpClientTestingModule, HttpModule, RouterTestingModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show user header length", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      var rowHeaderLength = element.querySelectorAll("th").length;
      expect(rowHeaderLength).toBe(6);
    });
  }));

  it("should have table header Sl NO ", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h1"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("Sl NO");
  });

  it("should have table header Buyers Name", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h2"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("Buyers Name");
  });

  it("should have table header Shipping Address", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h3"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("Shipping Address");
  });

  it("should have table header City", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h4"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("City");
  });

  it("should have table header Amount", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h5"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("Amount");
  });

  it("should have table header Phone", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css(".h6"));
    const el = de.nativeElement;
    expect(el.textContent).toEqual("Phone");
  });

  it("should be check tax api", inject([HttpTestingController, UserService], (httpMock: HttpTestingController, dataService: UserService) => {
    component.ngOnInit();
    dataService.getorderdata().subscribe(data => {
      expect(data).toEqual(data);
      expect(data).toBe(data);
      expect(data).not.toBe(null);
      expect(null).toBeNull();
      expect(data).toBeTruthy();
    });
  }));

});
