import { Component } from '@angular/core';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.scss']
})
export class UserServicesComponent {

  allServices = [
    {
      img: 'assets/images/food-services/biriyani.jpeg',
      item: 'Biriyani',
      amount: 344.2,
      content:'The traditional process of Chicken'
    },
    {
      img: 'assets/images/food-services/burger.jpg',
      item: 'Veg Burger',
      amount: 344.2,
      content:'The traditional process of Chicken'
    },
    {
      img: 'assets/images/food-services/biriyani.jpeg',
      item: 'Biriyani',
      amount: 344.2,
      content:'The traditional process of Chicken'
    },
  ]

}
