import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  orderItems:any[] = [];
  constructor(public fb: FormBuilder) { }



  allItems = this.fb.group({
    name: [''],
    amount: [''],
    chef: [''],
    foodType: [''],
    spicy: [''],
    details: [''],
  })

  addItems() {
    this.orderItems.push(this.allItems.value)
  }

  
}
