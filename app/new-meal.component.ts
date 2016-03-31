import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add a New Meal:</h3>
    <input placeholder="Meal Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Notes" class="col-sm-8 input-lg" #newNotes>
    <input placeholder="Calorie count" class="col-sm-8 input-lg" type="number" #newCalories>
    <div class="col-sm-3">
      <button class="btn-success btn-lg add-button" (click)="addMeal(newName, newNotes, newCalories)">Add</button>
    </div>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newNotes: HTMLInputElement, newCalories: HTMLInputElement){
    var newMeal = [newName.value, newNotes.value, newCalories.value];
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newNotes.value = "";
    newCalories.value = "";
    console.log("New Meal!!!!")

  }
}
