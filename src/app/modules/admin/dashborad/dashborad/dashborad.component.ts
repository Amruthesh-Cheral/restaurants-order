import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent {
  constructor(private router: Router){}

  onclick(){
    this.router.navigate(['/view'])
    
  }

}
