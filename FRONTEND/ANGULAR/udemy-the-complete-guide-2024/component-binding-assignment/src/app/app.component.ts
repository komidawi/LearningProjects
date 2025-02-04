import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-binding-assignment';

  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onIntervalFired (counter: number) {
    console.log('Number received: ' + counter)
    if (counter % 2) {
      this.evenNumbers.push(counter)
    } else {
      this.oddNumbers.push(counter)
    }
    console.log('Even Numbers ' + this.evenNumbers)
    console.log('Odd Numbers ' + this.oddNumbers)
  }
}
