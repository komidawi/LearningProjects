import { Recipe } from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core'

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://pixlr.com/images/generator/photo-generator.webp'),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://pixlr.com/images/generator/how-to-generate.webp')
  ]

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes () {
    return this.recipes.splice(0)
  }
}
