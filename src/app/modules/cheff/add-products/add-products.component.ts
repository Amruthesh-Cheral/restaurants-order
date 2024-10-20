import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  // foodTypes: { name: string }[] = [];

  addfoodTypes = (term: any) => ({ id: term, name: term });

  // addFoodcategory = (term: any) => ({ id: term, name: term });

  foodVegNon: { name: string }[] = [
    { name: 'Veg' },
    { name: 'Non-Veg' },
  ];

  foodTypes: { name: string }[] = [
    { name: 'Chinees' },
    { name: 'Soup' },
    { name: 'Pizza' },
    { name: 'Biriyani' },
  ];

  foodCategoryMapping = {
    'Chinese': [
      { name: 'Noodles' },
      { name: 'Fried Rice' },
    ],
    'Soup': [
      { name: 'Mutton Soup' },
      { name: 'Chicken Soup' },
    ],
    'Pizza': [
      { name: 'Veg Pizza' },
      { name: 'Cheese Pizza' },
    ],
    'Biriyani': [
      { name: 'Mutton Biriyani' },
      { name: 'Chicken Biriyani' },
    ]
  };
  foodCategorys: { name: string }[] = [];

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef, public fb: FormBuilder, public dataService: ApiHelper, public toster: ToastrService) { }

  ngOnInit(): void {
    // const alltypeFoods = JSON.parse(localStorage.getItem('foodType') || '[]');

    // this.foodTypes = alltypeFoods;
    // const allCategoryFoods = JSON.parse(localStorage.getItem('foodCategory') || '[]');
    // this.foodCategorys = allCategoryFoods;


    this.firstDisabled()
  }


  addFoodcategory(categoryName: string) {
    console.log(categoryName);

    const newCategory = { name: categoryName };
    this.foodCategorys = [...this.foodCategorys, newCategory]
    console.log(newCategory)
    return newCategory
  }


  allItems = this.fb.group({
    foodType: [null, Validators.required],
    foodCategory: [{ value: null, disabled: true }, Validators.required],
    amount: ['', Validators.required],
    details: [''],
    // foodVegNon: [null],
    vegnonveg: ['', Validators.required],
    // veg: [''],
    selectedFile: ['']
  });

  firstDisabled() {
    this.allItems.get('foodType')?.valueChanges.subscribe(selectedFoodtype => {
      if (selectedFoodtype) {
        this.foodCategorys = this.foodCategoryMapping[selectedFoodtype] || []
        console.log('Filtered categories:', this.foodCategorys);
        this.allItems.get('foodCategory')?.enable();
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
  categoryPop(val: string, title: string,) {
    const dialogRef = this.dialog?.open(AddItemModalComponent, {
      width: '400px',
      data: {
        categoryVal: val,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.checkVal === 'foodtype') {
        const foodtypeData = this.foodTypes = [{ name: result?.itemName }];
        this.toster.success("Category Added");
        localStorage.setItem('foodType', JSON.stringify(foodtypeData))
      } else if (result?.checkVal === 'foodCategory') {
        const foodcategoryData = this.foodCategorys = [...this.foodCategorys, { name: result.itemName }];
        localStorage.setItem('foodCategory', JSON.stringify(foodcategoryData))
        this.toster.success("Category Added");
      } else {
        return
      }
    });

  }
  // CATEGORY POPUP


  addItems() {
    if (this.allItems?.valid) {
      const addData = this.allItems.value;
      const finalData = {
        foodType: {
          name: addData.foodType,
          subCategory: addData.foodCategory
        },
        amount: addData.amount,
        details: addData.details,
        vegnonveg: addData.vegnonveg,
        selectedFile: addData.selectedFile

      }
      this.dataService.alldata(finalData);
      console.log(finalData, 'finalData');
      this.allItems.markAllAsTouched();

      this.toster.success("Form Submited Successfully");
      this.allItems.reset();
    }
  }
}
