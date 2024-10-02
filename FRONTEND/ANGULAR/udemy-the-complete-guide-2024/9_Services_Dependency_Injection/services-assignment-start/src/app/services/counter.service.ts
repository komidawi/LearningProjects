import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class CounterService {

  activations = 0
  deactivations = 0

  countActivation () {
    this.activations++
    console.log('Activations: ' + this.activations)
  }

  countDeactivation () {
    this.deactivations++
    console.log('Deactivations: ' + this.deactivations)
  }
}
