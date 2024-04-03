import { CommonModule } from '@angular/common';
import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-scroller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.css'
})
export class ScrollerComponent {
  pageScrolled: boolean = false;
  scrollProgress: string = 'transparent';
  arrowOpacity: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    //const scrollingElement = (event.target as any).document.scrollingElement;
    const scrollingElement = document.scrollingElement || document.documentElement;
    let scrollTop = scrollingElement.scrollTop;
    let scrollHeight = scrollingElement.scrollHeight;
    let clientHeight = scrollingElement.clientHeight;

    if (scrollTop > 0) {
      this.pageScrolled = true;
      this.arrowOpacity = 1;
    }
    else{
      this.arrowOpacity = 0;
    }

    this.scrollProgress = this.calculateScrollProgress(scrollTop, scrollHeight, clientHeight);
  }

  calculateScrollProgress(scrollTop: number, scrollHeight: number, clientHeight: number): string {
    if (scrollTop > 0) {
      let scrollFraction = scrollTop / (scrollHeight - clientHeight);
      let scrollProgressValue = Math.floor(scrollFraction * 100) / 100;
      return `hsl(${scrollProgressValue * 120}, 100%, 50%)`;
    } else {
      return 'transparent';
    }
  }
}
