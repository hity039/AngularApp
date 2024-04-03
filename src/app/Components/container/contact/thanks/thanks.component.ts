import { Component, Output  , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {
  @Output() closeThanks = new EventEmitter<boolean>();
  hideThanks(){
    this.closeThanks.emit(false);
  }
}
