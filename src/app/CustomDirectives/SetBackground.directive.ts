import { Directive, ElementRef, Input, Renderer2, input } from "@angular/core";

@Directive({
    selector : '[setBackground]',
    standalone:true
})
export class SetBackground{
//private element : ElementRef;

//  @Input('setBackground')  textColor : string = '#36454F';
//  @Input()  backColor : string = 'white';

@Input('setBackground') changeTextAndBackColor : {textColor :string , backColor : string};

constructor(private element : ElementRef, private renderer : Renderer2) {

    // When we use this syntax  to declare a property, TypeScript will automatically create a private variable with the name specified in the decorator/constructor and assign the value like the below line  
     //this.element = element;
}
ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = 'darkgrey';
    // this.element.nativeElement.style.color = 'white';
    this.renderer.setStyle(this.element.nativeElement, 'background-color',this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement,'color', this.changeTextAndBackColor.textColor);
}
}