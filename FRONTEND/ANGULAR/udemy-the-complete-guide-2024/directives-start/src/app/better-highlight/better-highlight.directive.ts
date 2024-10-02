import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor (private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseenter (event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseleave') mouseleave (event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
  }
}
