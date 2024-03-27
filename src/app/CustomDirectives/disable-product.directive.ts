import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[DisableProduct]',
  standalone: true
})
export class DisableProductDirective {
  @Input() set DisableProduct(disable : boolean){
    if (disable) {
      this.renderer.addClass(this.element.nativeElement, 'product-disabled');
    }
  }
  constructor(private element :ElementRef,private renderer : Renderer2) { }
  
}
