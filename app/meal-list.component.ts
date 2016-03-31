import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onTaskSelect'],
  directives: [MealComponent]
  template: `
  <h2 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
    {{currentMeal.name}}
  </h2>
  `
})

Export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EvenEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickeMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
