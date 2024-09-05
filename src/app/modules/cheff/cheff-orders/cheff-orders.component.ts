import { Component } from '@angular/core';

@Component({
  selector: 'app-cheff-orders',
  templateUrl: './cheff-orders.component.html',
  styleUrls: ['./cheff-orders.component.scss']
})
export class CheffOrdersComponent {

  allOrders = [
    {
      productImg : 'assets/images/food-services/burger.jpg',
      product : 'Burger',
      productId : 321,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/sandwich.jpg',
      product : 'Sandwich',
      productId : 221,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/biriyani.jpeg',
      product : 'Thalassery Biriyani',
      productId : 321,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/sandwich.jpg',
      product : 'Sandwich',
      productId : 221,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/biriyani.jpeg',
      product : 'Thalassery Biriyani',
      productId : 321,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/sandwich.jpg',
      product : 'Sandwich',
      productId : 221,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
    {
      productImg : 'assets/images/food-services/biriyani.jpeg',
      product : 'Thalassery Biriyani',
      productId : 321,
      orderData : '08/02/2022',
      tableOrder: 11,
      timeLeft : 22.22
    },
  ]

}
