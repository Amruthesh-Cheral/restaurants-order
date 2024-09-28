import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemComponent } from '../order-item/order-item.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordering-person',
  templateUrl: './ordering-person.component.html',
  styleUrls: ['./ordering-person.component.scss']
})
export class OrderingPersonComponent {
  orderFormgroup: FormGroup;
  selected = new FormControl(0);
  selectedCityIds!: string[];
  pricePerItem: number = 10;
  constructor(public dialog : MatDialog, private fb : FormBuilder){
    this.orderFormgroup = this.fb.group({
      selectedTable: [" "],   
      quantity: [1, [Validators.min(1), Validators.max(10)]]
    });
  }


  tableNo = [
    { id: 1, name: 'Table No : 1' },
    { id: 2, name: 'Table No : 2' },
    { id: 3, name: 'Table No : 3' },
    { id: 4, name: 'Table No : 4' },
  ];
  // ALL PRODUCTS DATA
  allProducts = [
    {
      menusubCategory: 'Burger',
      subProducts: [
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'vegg Burger 3 Items 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'veg'
        },
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Burger 2',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'non-veg'
        },
      ]
    },
    {
      menusubCategory: ' Pasta & Chakhna',
      subProducts: [
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Pasta 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'veg'
        },
      ]
    },
    {
      menusubCategory: ' Pasta 2',
      subProducts: [
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Veg Penne Pasta',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'veg'
        },
      ]
    },
    {
      menusubCategory: 'Breads',
      subProducts: [
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'veg'
        },
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 2',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'veg'
        },
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 3',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'non-veg'
        },
        {
          productImg :'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 4',
          itemContent: 'Served with fries or Nachos',
          itemPrize: '333.20',
          itemType: 'non-veg'
        },
      ]
    },
  ]
  // ALL PRODUCTS DATA

  increaseQuantity() {
    const currentQuantity = this.orderFormgroup.get('quantity')?.value;
    if (currentQuantity < 10) {
      this.orderFormgroup.patchValue({ quantity: currentQuantity + 1 });
    }
  }

  decreaseQuantity() {
    const currentQuantity = this.orderFormgroup.get('quantity')?.value;
    if (currentQuantity > 1) {
      this.orderFormgroup.patchValue({ quantity: currentQuantity - 1 });
    }
  }

  calculateTotal(): number {
    return this.orderFormgroup.get('quantity')?.value * this.pricePerItem;
  }


  // ITEM ORDER
  orderList = [
    {
      orderName : 'vegg Banana pastry spicy',
      orderPrize : 400,
    },
    {
      orderName : 'Chicken Biriyani',
      orderPrize : 150,
    },
  ]
  // ITEM ORDER
  // ORDER MODIFIERS

  orderModifier() {
  
  }

  // ORDER MODIFIERS
}
