import { CommonModule } from '@angular/common';
import { Component ,Input, OnChanges, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent implements OnInit , OnChanges {
   @Input() message: string;
   @Input() isHidden : Boolean = true;
  //checkVisiblity : Observable<boolean>;

  constructor() {
    
  }
  ngOnInit(): void {
    console.log("Is Hidden : " + this.isHidden);
    if (!this.isHidden) {
      setTimeout(() => {
        console.log("Is Hidden inside : " + this.isHidden);
        this.isHidden = true;
      }, 5000);
    }
  }

  //this.checkVisiblity = Observable.of(this.isHidden);
  ngOnChanges(): void {
    console.log("Is Hidden : " + this.isHidden);
    if (this.isHidden) {     
        this.isHidden = false;
        setTimeout(() => {
          this.isHidden = true;
        },4000);
    }
  }
}
