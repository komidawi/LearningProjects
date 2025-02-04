import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor (private elementRef: ElementRef) {}

  ngOnInit () {
    /* Don't do this way! Use renderer instead!
    It is because not all environments have DOM,
    so manually editing DOM just won't work in such cases.
    Using Renderer2 is a good practice. */
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
