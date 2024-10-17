import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormValidationService } from 'src/app/core/service/form-validation.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  title!: string;
  categoryVal!: string;

  constructor(private fb: FormBuilder, private validationService: FormValidationService,
    @Inject(MAT_DIALOG_DATA) public data: { categoryVal: string; title: string },
    private dialogRef: MatDialogRef<AddItemModalComponent>) { }
    typeFood: boolean = false;
    foodTypes:[] = [];

  ngOnInit() {

    this.title = this.data.title;
    const alltypeFoods = JSON.parse(localStorage.getItem('foodType') || '[]');
    this.foodTypes = alltypeFoods;
    if (this.data.categoryVal === 'foodCategory') {
      this.typeFood  = true;
    }
  }

  addItem = this.fb.group({
    itemName: ['', [Validators.required, Validators.minLength(3)]],
    checkVal: this.data.categoryVal,
    foodType:[null,Validators.required,]
  })

  addItemFun() {
    const formData = this.addItem.value;
    this.dialogRef.close(formData);
    console.log(formData);
    
  }

}
