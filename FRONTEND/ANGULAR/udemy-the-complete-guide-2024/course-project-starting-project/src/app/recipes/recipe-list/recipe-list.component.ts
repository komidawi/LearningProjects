import { Component, EventEmitter, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png')
  ]

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
