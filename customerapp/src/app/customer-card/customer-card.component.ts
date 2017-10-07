import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Customer }from '../common/interfaces';


@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
@Input()
customers:Customer[]=[];



@Output()
removeEvent:EventEmitter<number>=new EventEmitter<number>();
@Output()
updateEvent:EventEmitter<Customer>=new EventEmitter<Customer>();

  constructor() { }

  ngOnInit() {
  }

  deleteCustomer(id:number){
    console.log("delete the card component child :"+id);
    this.removeEvent.next(id);
  }


  updateCustomer(customer:Customer){
    console.log("customer test Card Component:",customer);
    this.updateEvent.next(customer);
  }


 
}
  


