import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  // [2.1] Event Binding - Child @Output to Parent
  @Output() eventHappened = new EventEmitter<string>()

  onButtonClick () {
    this.eventHappened.emit('Clicked !')
  }

  // 1. @Input Decorator (w/ alias)
  @Input('buttonShown') btnShown: boolean = false

}
