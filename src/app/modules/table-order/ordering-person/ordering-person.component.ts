import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  orderList: any[] = [];
  roundNum!: number;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.orderFormgroup = this.fb.group({
      selectedTable: [null],
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
          productId: 1000,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'vegg Burger 3 Items 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 111.20,
          itemType: 'veg',
          btnDisabled: false
        },
        {
          productId: 1001,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Burger 2',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 222.20,
          itemType: 'non-veg',
          btnDisabled: false
        },
      ]
    },
    {
      menusubCategory: ' Pasta & Chakhna',
      subProducts: [
        {
          productId: 1003,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Pasta 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 212.20,
          itemType: 'veg',
          btnDisabled: false
        },
      ]
    },
    {
      menusubCategory: ' Pasta 2',
      subProducts: [
        {
          productId: 1004,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Veg Penne Pasta',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 112.20,
          itemType: 'veg',
          btnDisabled: false
        },
      ]
    },
    {
      menusubCategory: 'Breads',
      subProducts: [
        {
          productId: 1005,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 1',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 444.20,
          itemType: 'veg',
          btnDisabled: false
        },
        {
          productId: 1006,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 2',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 455.20,
          itemType: 'veg',
          btnDisabled: false
        },
        {
          productId: 1007,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 3',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 666.20,
          itemType: 'non-veg',
          btnDisabled: false
        },
        {
          productId: 1008,
          productImg: 'https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full',
          itemName: 'Bread 4',
          itemContent: 'Served with fries or Nachos',
          itemPrize: 775.20,
          itemType: 'non-veg',
          btnDisabled: false
        },
      ]
    },
  ]
  // ALL PRODUCTS DATA

  increaseQuantity(index: number) {
    const currentQuantity = this.orderList[index].quantity;
    if (currentQuantity < 10) {
      console.log(this.orderList[index].quantity);

      Math.round(this.orderList[index].quantity++);
    }
  }

  decreaseQuantity(index: number) {
    const currentQuantity = this.orderList[index].quantity;
    if (currentQuantity > 1) {
      Math.round(this.orderList[index].quantity--);
    }
  }

  // ITEM ORDER
  // ORDER MODIFIERS
  roundUpToTwoDecimals(value: number): number {
    // console.log(Math.round(value * 100) / 100);

    return Math.round(value * 100) / 100;
  }

  orderModifier(product: any, index: number) {
    this.orderList.push({
      orderName: product.itemName,
      orderPrize: this.roundUpToTwoDecimals(product.itemPrize),
      orderId: product.productId,
      quantity: 1
    })

    product.btnDisabled = true;
    this.pricePerItem = this.roundUpToTwoDecimals(product.itemPrize);
  }

  calculateTotal(): number {
    const total = this.orderList.reduce((acc, item) => acc + (item.quantity * item.orderPrize), 0);
    this.roundNum = Math.round(total)
    return this.roundUpToTwoDecimals(this.roundNum)
  }
  mathRoundfunc(value: number) {

    return Math.round(value)
  }

  // ORDER MODIFIERS
}
