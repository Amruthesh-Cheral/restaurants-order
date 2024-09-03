import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() closeOpenoutput = new EventEmitter<boolean>()
  closeOpen: boolean = false;
  openClose() {
    this.closeOpenoutput.emit(this.closeOpen)
  }
}
