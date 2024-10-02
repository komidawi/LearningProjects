import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-labelka',
  templateUrl: './labelka.component.html',
  styleUrl: './labelka.component.css'
})
export class LabelkaComponent implements AfterContentInit {

  // 5. @ContentChild
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef

  ngAfterContentInit () {
    this.paragraph.nativeElement.innerText += ' (and this is added by @ContentChild)'
  }
}

