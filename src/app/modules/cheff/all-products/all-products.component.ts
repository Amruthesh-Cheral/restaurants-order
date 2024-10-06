import { Component, OnInit } from '@angular/core';
import { ApiHelper } from 'src/app/core/service/api.helper';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private dataService: ApiHelper) {}

  ngOnInit() {
    this.dataService.currentData.subscribe((data => {
      this.allProducts = data;
      console.log(this.allProducts);
      
    }))
    const fooditemArray = JSON.parse(localStorage.getItem('fooditemArray') || '[]');
    this.allProducts = fooditemArray;
    console.log(this.allProducts);
  }

  addPage() {}
}
