import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appBetterHostBindingHighlight]'
})
export class BetterHighlightHostBindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string

  @HostListener('mouseenter') mouseenter (event: Event) {
    this.backgroundColor = 'red'
  }

  @HostListener('mouseleave') mouseleave (event: Event) {
    this.backgroundColor = 'transparent'
  }
}
