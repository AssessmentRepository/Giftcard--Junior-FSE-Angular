import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:4444/";

    constructor(private http: Http , private https:HttpClient) { }
    postorderdata(data){
      return this.http.post(UserService.BaseUrl+'giftcard',data,httpOptions).pipe(map((response: Response) => response.json()));
   
    }
    register(data){
      return this.https.post(UserService.BaseUrl+'login',data).pipe(map((response: Response) => response.json()));
     
    }
    // registers(data){
    //   return this.https.post(UserService.BaseUrl+'login',data).pipe(map((response: Response) => response.json()));
     
    // }
    getorderdata() {
        return this.http.get(UserService.BaseUrl+'giftcard',httpOptions).pipe(map((response: Response) => response.json()));
    }

}