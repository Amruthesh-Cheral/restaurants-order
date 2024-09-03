import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalstorageService } from 'src/app/core/service/localstorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() closeOpenoutput = new EventEmitter<boolean>()
  closeOpen: boolean = false;
  modeChangeval: boolean = false;
  constructor(private darkLight: LocalstorageService) { }

  ngOnInit(): void {
    
    if (this.darkLight.currentTheme === 'dark') {
      this.modeChangeval = true
    } else {
      this.modeChangeval = false
    }
  }

  openClose() {
    this.closeOpenoutput.emit(this.closeOpen)
  }

  modeChange() {
    this.darkLight.toggleTheme()
    if (this.darkLight.currentTheme === 'dark') {
      this.modeChangeval = true
    } else {
      this.modeChangeval = false
    }
  }
}
