import { Component } from '@angular/core';
import { navItems } from '../nav';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  public navItems = navItems;
  sidePanel: boolean = false
  openClose() {
    this.sidePanel = !this.sidePanel
  }

}
