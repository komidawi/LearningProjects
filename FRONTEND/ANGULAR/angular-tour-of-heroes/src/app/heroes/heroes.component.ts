import { Component } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor (private heroService: HeroService) {}

  ngOnInit () {
    this.setupHeroes()
  }

  private setupHeroes () {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero
  }
}
