import { Component, OnInit } from '@angular/core';
import { ApiHelper } from 'src/app/core/service/api.helper';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  addProducts: any[] = [];
  constructor(private dataService : ApiHelper){

  }
  
  ngOnInit() {

  }

  // addPage(){
  //   this.dataService.alldata(addData)
  // }
}
