import { Component , EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number = 0;
  @Input()
  inStock:number = 0;
  @Input()
  outOfStock:number = 0;

  @Output() selectedRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButton : string = 'all';

  onChangeOfFilter(){
    this.selectedRadioButtonChanged.emit(this.selectedFilterButton);
  }
}
