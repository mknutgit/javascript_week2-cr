import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-edit">
    <h2>Meal Details: </h2>
      <h4>* Edit below if necessary *</h4>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.notes" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
