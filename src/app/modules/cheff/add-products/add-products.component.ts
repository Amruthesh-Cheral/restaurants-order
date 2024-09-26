import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiHelper } from 'src/app/core/service/api.helper';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  orderItems: any[] = [];
  constructor(public fb: FormBuilder, public dataService: ApiHelper, public toster: ToastrService) { }

  allItems = this.fb.group({
    name: [''],
    amount: [''],
    chef: [''],
    foodType: [''],
    category: [''],
    details: [''],
    cheff: [''],
    prize: [''],
  })

  addItems() {
    const addData = this.allItems.value
    this.dataService.alldata(addData)
    this.toster.success("Form Submited Successfully");
    this.allItems.reset();
  }
}
