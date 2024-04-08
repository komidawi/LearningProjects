import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()

  newServerContent = ''

  onAddServer (serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.name,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint (serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.name,
      serverContent: this.newServerContent
    })
  }
}
