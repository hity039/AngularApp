import { CommonModule } from '@angular/common';
import { Component ,DoCheck,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
   @Input() message: string;
    @Input() isHidden : Boolean = true;

  //isHidden = false;
  // ngOnInit(): void {
  //   alert(this.isHidden);
  // }
  // ngDoCheck() {
  //   setTimeout(() => {
  //     this.isHidden = true;
  //   }, 5000);
  // }

  ngAfterViewInit(): void {
    if (!this.isHidden) {
      setTimeout(() => {
        this.isHidden = true;
      }, 5000);
    }
  }
}
