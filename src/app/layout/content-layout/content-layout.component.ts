import { Component, OnInit } from '@angular/core';
import { navItems } from '../nav';
import { LocalstorageService } from 'src/app/core/service/localstorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit{
  public navItems = navItems;
  sidePanel: boolean = false;
  subMenuOpen: { [key: string]: boolean } = {};
  constructor(public darkLight: LocalstorageService, private toastr : ToastrService){
  
  }
  ngOnInit(): void {
    this.darkLight.currentTheme
  }
  openClose() {
    this.sidePanel = !this.sidePanel
  }
  toggleSubMenu(subname: string) {
    
    this.subMenuOpen[subname] = !this.subMenuOpen[subname];
  }
  
}
