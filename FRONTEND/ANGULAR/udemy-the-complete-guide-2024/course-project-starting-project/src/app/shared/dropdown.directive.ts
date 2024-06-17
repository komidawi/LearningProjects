import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'
import { Event } from '@angular/router'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false

  constructor (private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseclick') mouseclick (event: Event) {
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open')
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open')
    }
  }
}
