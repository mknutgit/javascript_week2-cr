import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { HealtyPipe } from './healthy.pipe.ts'

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `


    <div class="row">
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
      <hr>
      <h2>Meals:</h2>
      <div>
        <select (change)="onChange($event.target.value)" class="filter">
          <option value="All" selected="selected">Show All</option>
          <option value="Healthy">Show Healthy</option>
          <option value="Unhealthy" selected="selected">Show unhealthy</option>
        </select>
        <meal-display *ngFor="#currentMeal of mealList"
          (click)="mealClicked(currentMeal)"
          [class.selected]="currentMeal === selectedMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>



  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(userInput): void {
    this.mealList.push(
      new Meal(userInput[0], userInput[1], userInput[2])
    );
  }
}
