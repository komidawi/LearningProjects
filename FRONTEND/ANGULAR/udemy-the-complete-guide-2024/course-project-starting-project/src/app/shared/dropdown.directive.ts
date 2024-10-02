import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Improvement: Using @HostBinding is more straightforward
  @HostBinding('class.open') isOpen = false

  // Fix: Event is `click`, not `mouseclick`
  @HostListener('click') toggleDropdown () {
    this.isOpen = !this.isOpen
  }
}
