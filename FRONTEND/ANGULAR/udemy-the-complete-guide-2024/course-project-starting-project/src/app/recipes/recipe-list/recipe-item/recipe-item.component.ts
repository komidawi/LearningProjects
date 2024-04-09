import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<void>()

  onRecipeClick () {
    this.recipeSelected.emit()
  }
}
