import { CommonModule} from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string = '';
  @Output() SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChanged(){
    
  }
  onSearchClick(inputEl :HTMLInputElement){
    this.searchText = inputEl.value;
    this.SearchTextChanged.emit(this.searchText);
  }
}
