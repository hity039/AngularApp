import { CommonModule} from '@angular/common';
import { Component, ElementRef, EventEmitter,Output, ViewChild } from '@angular/core';
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
  @ViewChild('searchInput') searchInputEl : ElementRef;
  onSearchTextChanged(){
    
  }
  onSearchClick(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }
}
