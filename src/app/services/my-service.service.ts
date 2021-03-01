import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }


  // Get method to fecth the details 
  getUserDetails() {
    return this.http.get
    ('http://localhost:7000/users/list');         
  }

// Post // put // Implementation 

}
