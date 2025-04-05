import { Component } from '@angular/core';

@Component({
  selector: 'app-block-with-show-hide',
  imports: [],
  templateUrl: './block-with-show-hide.component.html',
  styleUrl: './block-with-show-hide.component.css'
})
export class BlockWithShowHideComponent {
  hideStatus: boolean = false;

  show() {
      this.hideStatus = false;
  }
  
  hide() {
      this.hideStatus = true;
  }
  
}
