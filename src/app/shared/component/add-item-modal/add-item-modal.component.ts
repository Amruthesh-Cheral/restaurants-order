import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  title!: string;
  categoryVal!: string;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { categoryVal: string; title: string },
    private dialogRef: MatDialogRef<AddItemModalComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  addItem = this.fb.group({
    itemName: [''],
    checkVal: this.data.categoryVal,
  })

  addItemFun() {
    const formData = this.addItem.value;
    
    // console.log(formData);
    this.dialogRef.close(formData);
  }

}
