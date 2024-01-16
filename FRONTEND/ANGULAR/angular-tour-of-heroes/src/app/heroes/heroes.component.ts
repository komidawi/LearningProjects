import { Component } from '@angular/core'
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes = HEROES

  selectedHero?: Hero

  onSelect (hero: Hero) {
    this.selectedHero = hero
  }
}
