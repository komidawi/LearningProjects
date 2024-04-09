import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesVisible = true
  shoppingListVisible = true

  onNavigationClick(tab: string) {
    if (tab === 'recipes') {
      this.recipesVisible = !this.recipesVisible
    }
    if (tab === 'shoppingList') {
      this.shoppingListVisible = !this.shoppingListVisible
    }
  }
}
