import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: true }) nameInput: ElementRef
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef

  @Output() newIngredient = new EventEmitter<Ingredient>()

  onAddClicked () {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const ingredient = new Ingredient(name, amount)
    this.newIngredient.emit(ingredient)
  }
}
