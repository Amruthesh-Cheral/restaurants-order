import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiHelper } from 'src/app/core/service/api.helper';
import { AddItemModalComponent } from 'src/app/shared/component/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  orderItems: any[] = [];
  selectedFile: File | null = null;

  title!: string;
  text!: string;

  constructor(public dialog: MatDialog, public fb: FormBuilder, public dataService: ApiHelper, public toster: ToastrService) { }

  allItems = this.fb.group({
    itemName: [''],
    amount: [''],
    foodCategory: [null],
    details: [''],
    selectedFile: [''],
    foodType: [null]
  });

  foodCategorys = [];
  foodTypes: {name: string}[] = [];

  // img upload
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

  }

  // CATEGORY POPUP
  categoryPop(val: string, title: string,) {
    const dialogRef = this.dialog.open(AddItemModalComponent, {
      width: '400px',
      data: {
        categoryVal: val,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.checkVal === 'foodtype') {
        console.log(result);
        
        this.foodTypes.push({ name: result.itemName });
        console.log(this.foodTypes);
        
      } else if (result.checkVal === 'foodCategory') {
        result.itemName.push(this.foodCategorys)
      } else {
        alert("else ")
      }
      console.log('Dialog closed with data:', result);
    });

  }
  // CATEGORY POPUP


  addItems() {
    if (this.allItems.valid) {
      const addData = this.allItems.value
      this.dataService.alldata(addData);
      this.toster.success("Form Submited Successfully");
      console.log(this.allItems);

      // this.allItems.reset();
    }
  }
}
