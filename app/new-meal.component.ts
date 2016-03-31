import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add a New Meal:</h3>
    <input placeholder="Meal Name" class="col-sm-8 input-lg" #name>
    <input placeholder="Notes" class="col-sm-8 input-lg" #notes>
    <input placeholder="Calorie count" class="col-sm-8 input-lg" #calories>
    <div class="col-sm-3">
      <button class="btn-success btn-md add-button" (click)="addMeal(name, notes, calories)">Add</button>
    </div>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, notes: HTMLInputElement, calories: HTMLInputElement){
    var mealArray = [name.value, notes.value, parseInt(calories.value)];
    this.onSubmitNewMeal.emit(mealArray);
    name.value = "";
    notes.value = "";
    calories.value = "";
  }
}
