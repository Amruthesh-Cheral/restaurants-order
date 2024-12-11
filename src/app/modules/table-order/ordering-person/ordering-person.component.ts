import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiHelper } from 'src/app/core/service/api.helper';
import { ApiEndPoints } from 'src/app/core/constants';

@Component({
  selector: 'app-ordering-person',
  templateUrl: './ordering-person.component.html',
  styleUrls: ['./ordering-person.component.scss']
})
export class OrderingPersonComponent implements OnInit {
  


  orderFormgroup: FormGroup;
  selected = new FormControl(0);
  selectedTableIds!: string[];
  pricePerItem: number = 10;
  orderList: any[] = [];
  roundNum!: number;

  searchText: string = '';

  btnDisabled: boolean = false;
  constructor(public dialog: MatDialog, public apiHelper: ApiHelper, private fb: FormBuilder) {
    this.orderFormgroup = this.fb.group({
      selectedTable: [null, Validators.required],
      quantity: [1, [Validators.min(1), Validators.max(10)]]
    });


  }
  ngOnInit(): void {
    this.deleteItem;
    this.orderFormgroup.valueChanges.subscribe(value => {
      this.selectedTableIds = value.selectedTable; 
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
      quantity: 1,
      btnDisabled: true
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

  deleteItem(item: any) {
    const index = this.orderList.indexOf(item);
    if (index > -1) {
      this.orderList.splice(index, 1);  // Remove the item from orderList
      // Find the corresponding product in allProducts and enable the button
      const product = this.allProducts.flatMap(category => category.subProducts)
        .find(prod => prod.productId === item.orderId);
      if (product) {
        product.btnDisabled = false;
      }
      console.log(product?.btnDisabled);  // Should log false after re-enabling
    }
  }

  kotOrder() {
    if (this.orderFormgroup?.valid) {
      const orderData = this.orderList.map(item => ({
        orderName: item.orderName,
        orderPrize: item.orderPrize,
        orderId: item.orderId,
        quantity: item.quantity,
      }))
      this.printReceipt();
      // this.apiHelper.post(orderData, ApiEndPoints.orderItem).subscribe(res => {
      //   console.log('Order sent successfully', res);
      //   this.printReceipt();

      // }, error => {
      //   console.error('Error sending order', error);
      // })
    }
  }


  printReceipt() {
   
    
    let printContent = '<h2>Order Receipt</h2><hr>';
    printContent += `<p><strong>Table: ${this.selectedTableIds}</strong></p><hr>`;

    
    this.orderList.forEach(item => {
      printContent += `
            <p><strong>${item.orderName}</strong></p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ₹${this.mathRoundfunc(item.quantity * item.orderPrize)}</p><hr>`;
    });

    printContent += `<h3>Total: ₹${this.calculateTotal()}</h3>`;

    const printWindow = window.open('', '_blank', 'width=400,height=600');
    printWindow?.document.write(`<html><body>${printContent}</body></html>`);
    printWindow?.document.close();
    printWindow?.print();
  }

  
}
