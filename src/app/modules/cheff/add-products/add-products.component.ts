import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class AddProductsComponent implements OnInit {
  orderItems: any[] = [];
  selectedFile: File | null = null;
  title!: string;
  text!: string;
  foodCategorys: { name: string }[] = [];
  foodTypes: { name: string }[] = [];

  foodVegNon :{ name: string } [ ]= [
    { name: 'Veg' },
    {  name: 'Non-Veg' },
  ];

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef, public fb: FormBuilder, public dataService: ApiHelper, public toster: ToastrService) { }

  ngOnInit(): void {
    const alltypeFoods = JSON.parse(localStorage.getItem('foodType') || '[]');
    this.foodTypes = alltypeFoods;
    const allCategoryFoods = JSON.parse(localStorage.getItem('foodCategory') || '[]');
    this.foodCategorys = allCategoryFoods;
  }

  allItems = this.fb.group({
    amount: [''],
    foodCategory: [null],
    details: [''],
    nonveg: [''],
    veg: [''],
    foodVegNon:[null],
    selectedFile: [''],
    foodType: [null]
  });

  // img upload
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  // CATEGORY POPUP
  categoryPop(val: string, title: string,) {
    const dialogRef = this.dialog?.open(AddItemModalComponent, {
      width: '400px',
      data: {
        categoryVal: val,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.checkVal === 'foodtype') {
        const foodtypeData = this.foodTypes = [...this.foodTypes, { name: result.itemName }];
        this.toster.success("Category Added");
        localStorage.setItem('foodType', JSON.stringify(foodtypeData))
      } else if (result.checkVal === 'foodCategory') {
        const foodcategoryData = this.foodCategorys = [...this.foodCategorys, { name: result.itemName }];
        localStorage.setItem('foodCategory', JSON.stringify(foodcategoryData))
        this.toster.success("Category Added");
      } else {
        this.toster.warning("Unknown Field");
      }
    });

  }
  // CATEGORY POPUP


  addItems() {
    if (this.allItems.valid) {
      const addData = this.allItems.value;
      this.dataService.alldata(addData);
      this.toster.success("Form Submited Successfully");
      console.log(addData);
      // console.log(this.allItems);

      // this.allItems.reset();
    }
  }
}
