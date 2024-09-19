import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemComponent } from '../order-item/order-item.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordering-person',
  templateUrl: './ordering-person.component.html',
  styleUrls: ['./ordering-person.component.scss']
})
export class OrderingPersonComponent {
  orderFormgroup: FormGroup;
  selected = new FormControl(0);
  constructor(public dialog : MatDialog){
    this.orderFormgroup = new FormGroup({
      selectedTable: new FormControl(null),   
      firstName: new FormControl('') ,
      pepperoni: new FormControl('') 
    });
  }

  selectedTable: any;

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
          itemName: 'Burger 1',
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
    const dialogRef = this.dialog.open(OrderItemComponent, {
      // data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }

  // ORDER MODIFIERS
}
