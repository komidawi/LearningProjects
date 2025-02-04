import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() navBarClick = new EventEmitter<string>()

  onRecipesClick() {
    this.navBarClick.emit('recipes')
  }

  onShoppingListClick() {
    this.navBarClick.emit('shoppingList')
  }
}
