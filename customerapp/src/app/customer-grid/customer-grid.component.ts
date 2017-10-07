import { Component, OnInit } from '@angular/core';
import { Customer }from '../common/interfaces';


@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {

customers:Customer[]=[]
  constructor() { }

  ngOnInit() {
  }

}
