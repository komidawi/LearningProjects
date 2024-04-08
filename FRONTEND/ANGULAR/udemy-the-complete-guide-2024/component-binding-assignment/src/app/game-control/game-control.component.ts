import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  gameProcessor
  counter: number = 0
  @Output() intervalFired = new EventEmitter<number>()

  onStartClicked () {
    this.gameProcessor = setInterval(() => this.increment(), 1000)
    console.log('Game Started')
  }

  onStopClicked () {
    clearInterval(this.gameProcessor)
    console.log('Game Stopped')
  }

  increment () {
    console.log('Emitting Event with number: ' + this.counter)
    this.intervalFired.emit(this.counter)
    this.counter++
  }
}
