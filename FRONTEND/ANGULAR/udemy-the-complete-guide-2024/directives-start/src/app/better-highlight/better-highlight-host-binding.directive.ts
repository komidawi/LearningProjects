import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appBetterHostBindingHighlight]'
})
export class BetterHighlightHostBindingDirective implements OnInit {
  @Input() initialColor = 'transparent'
  @Input() highlightColor = 'red'
  @HostBinding('style.backgroundColor') backgroundColor: string

  ngOnInit () {
    this.backgroundColor = this.initialColor
  }

  @HostListener('mouseenter') mouseenter (event: Event) {
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave (event: Event) {
    this.backgroundColor = this.initialColor
  }
}
