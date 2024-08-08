import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { ChildComponentComponent } from './child-component/child-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  // [1.1] String Interpolation
  title = 'playground'

  // [1.2] Property Binding
  isEnabled = true

  // [2.1] Event Binding - local
  // [2.1] Event Binding - Child @Output to Parent
  toggleButtonEnabled () {
    this.isEnabled = !this.isEnabled
  }

  // [3.1] Two-way binding
  text = 'initial text'

  // 2. Local reference #myHTMLReference
  onClickForLocalRef (localReferenceInput: HTMLInputElement) {
    console.log('onClickForLocalRef', localReferenceInput)
  }

  // 3. @ViewChild
  @ViewChild(ChildComponentComponent) childComponent: ChildComponentComponent

  ngAfterViewInit () {
    console.log(this.childComponent)
  }
}
