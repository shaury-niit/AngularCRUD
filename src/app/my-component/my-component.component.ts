import { Component, OnInit } from '@angular/core';
import { Customer } from './customer'
import { NGXLogger } from 'ngx-logger';
import { MyServiceService } from '../services/my-service.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  //declare the array and model here

  custArray: Array<Customer> = new Array();

  // declare one more model variable here

  model = new Customer('', 0);

  editIndex: any;

  getData: any;

  constructor(private _httpService: MyServiceService, private logger: NGXLogger) {
    this.logger.debug("in constructor method")
    
  }

  ngOnInit(): void {
  }

  //write a method or event to create Customer

  createCustomer() {
    try {
      // console.log("customer creation here--->");
      this.logger.info("customer creation here");
      //add customer in customer array using push
      // console.log(this.model.age);
      this.logger.debug(this.model.age)
      this.custArray.push(new Customer(this.model.name, this.model.age));
      // console.log(JSON.stringify(this.custArray))
      this.logger.info(JSON.stringify(this.custArray))
    }
    catch (err) {
      // console.log("error to create the customer-->", err);
      this.logger.error("error to create the customer-->", err)
    }
  }

  returnIndex(idx: number): string {
    return "customer" + idx
  }

  returnEditIndex(idx: number): string {
    return "editCustomer" + idx
  }

  editInput(idx: number) {
    this.model.name = document.getElementsByClassName("customer" + idx)[0].innerHTML;
    this.model.age = parseInt(document.getElementsByClassName("customer" + idx)[1].innerHTML);
    this.editIndex = idx;
    
  }

  updateCustomer(){
    let array = this.custArray;
    array[this.editIndex].name = this.model.name;
    array[this.editIndex].age = this.model.age;
    this.custArray = array;
  }


  getUser() {

    this._httpService.getUserDetails().subscribe((res) => {
      console.log(res);
      this.getData = res;

    });
  }


  // //Delete operation on Customer array    

  public deleteCustomer(idx: number): Array<Customer> {
    this.custArray.splice(idx, 1);
    return this.custArray;
  }

}

