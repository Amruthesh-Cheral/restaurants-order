import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiEndPoints } from 'src/app/core/constants';
import { ApiHelper } from 'src/app/core/service/api.helper';
import { AddItemModalComponent } from 'src/app/shared/component/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  orderItems: any[] = [];
  foodItems: any[] = [];
  selectedFile: File | null = null;
  title!: string;
  text!: string;
  selectedFoodtype!: string;
  allProductitems: any = []
  paramId!: string;
  submitUpdatevar!: string;
  addfoodTypes = (term: any) => ({ id: term, name: term });

  foodVegNon: { name: string }[] = [
    { name: 'Veg' },
    { name: 'Non-Veg' },
  ];

  foodTypes: { name: string }[] = [];
  foodCategoryMapping = {};
  foodCategorys: { name: string }[] = [];
  isFormPatched: boolean = false;
  constructor(public route: ActivatedRoute, public dialog: MatDialog, private cd: ChangeDetectorRef, public fb: FormBuilder, public apiHelper: ApiHelper, public toster: ToastrService) { }

  ngOnInit(): void {
    this.firstDisabled();
    this.getItems();
    this.paramId = this.route.snapshot.paramMap.get('id')!;

    if (!this.paramId) {
      this.submitUpdatevar = 'Submit'
    } else {
        this.submitUpdatevar = 'Update'
    }

  }


  addFoodcategory(categoryName: string) {
    const newCategory = { name: categoryName };
    this.foodCategorys = [...this.foodCategorys, newCategory]
    return newCategory
  }


  allItems = this.fb.group({
    foodType: [null, Validators.required],
    foodCategory: [{ value: null, disabled: true }, Validators.required],
    amount: ['', Validators.required],
    details: [''],
    vegnonveg: ['', Validators.required],
    selectedFile: ['']
  });

  firstDisabled() {
    this.allItems.get('foodType')?.valueChanges.subscribe(foodType => {
      if (foodType) {
        this.selectedFoodtype = foodType
        this.foodCategorys = this.foodCategoryMapping[foodType] || []
        this.getItems()
        this.allItems.get('foodCategory')?.enable();
        this.foodCategorys = []
      } else {
        this.foodCategorys = []
        this.allItems.get('foodCategory')?.disable();
      }
    })
  }

  // img upload
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  // CATEGORY POPUP
  // categoryPop(val: string, title: string,) {
  //   const dialogRef = this.dialog?.open(AddItemModalComponent, {
  //     width: '400px',
  //     data: {
  //       categoryVal: val,
  //       title: title
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result?.checkVal === 'foodtype') {
  //       const foodtypeData = this.foodTypes = [{ name: result?.itemName }];
  //       this.toster.success("Category Added");
  //       localStorage.setItem('foodType', JSON.stringify(foodtypeData))
  //     } else if (result?.checkVal === 'foodCategory') {
  //       const foodcategoryData = this.foodCategorys = [...this.foodCategorys, { name: result.itemName }];
  //       localStorage.setItem('foodCategory', JSON.stringify(foodcategoryData))
  //       this.toster.success("Category Added");
  //     } else {
  //       return
  //     }
  //   });

  // }
  // CATEGORY POPUP


  addItems() {
    if (!this.paramId) {
      this.submitUpdatevar = 'Submit'
      this.submitForm()
    } else {
        this.submitUpdatevar = 'Update'
      this.updateForm()
    }

  }

  // FORM SUBMIT 
  submitForm() {
    if (this.allItems?.valid) {
      const addData = this.allItems.value;
      this.apiHelper.post(addData, ApiEndPoints.addItem).subscribe(res => {
        this.toster.success("Form Submited Successfully");
        this.allItems.reset();
        console.log(res, 'res');
      }, error => {
        console.error('Error submitting food data:', error);
      });
    } else {
      this.allItems.markAllAsTouched();
    }
  }

  //  UPDATE FORM

  updateForm() {
    if (this.allItems?.valid) {

    }
  }

  getItems() {
    this.apiHelper.post({}, ApiEndPoints.getFood).subscribe((res) => {
      this.allProductitems = res.data;
      if (Array.isArray(this.allProductitems)) {
        this.foodTypes = this.allProductitems.filter(item => item?.foodType).map(item => ({ name: item?.foodType })).filter((value, index, self) => index === self.findIndex((t) => t.name === value.name));
        this.foodCategorys = this.allProductitems.filter(item => item?.foodType === this.selectedFoodtype).map(items => ({ name: items?.foodCategory })).filter((value, index, self) => index === self.findIndex((t) => t.name === value.name));
      }
      this.formPatchval()
    })
  }

  // FORM UPDATE PATCH VALUE
  formPatchval() {
    let filteredItems: any = this.allProductitems.filter((item: any) => item.id === this.paramId?.toString());
    if (filteredItems && filteredItems.length > 0) {
      if (!this.isFormPatched) {
        this.allItems.patchValue(filteredItems[0]);
        this.isFormPatched = true;
      }
    }
  }
  // FORM UPDATE PATCH VALUE
}
