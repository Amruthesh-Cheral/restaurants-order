import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndPoints } from 'src/app/core/constants';
import { ApiHelper } from 'src/app/core/service/api.helper';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  allProducts: any[] = [];

  constructor(private apiHelper: ApiHelper, private router: Router) { }

  ngOnInit() {
    this.getItems()
    console.log(this.allProducts);
  }

  getItems() {
    this.apiHelper.post({}, ApiEndPoints.getFood).subscribe(res => {
      this.allProducts = res.data;
    })
  }

  edit(id: number) {
    this.router.navigate(['/order/add-products', id]);
  }
}
