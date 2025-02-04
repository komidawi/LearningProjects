import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input() element: { type: string, name: string, content: string }
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef

  ngOnInit () {
    console.log(`this.paragraph: ${this.paragraph.nativeElement.textContent}`)
  }

  ngAfterViewInit () {
    console.log(`this.paragraph: ${this.paragraph.nativeElement.textContent}`)
  }
}
