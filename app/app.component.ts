import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent} from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Meal Tracker</h1>
         <h4>Go ahead, track your meals and calorie counts!</h4>
      </div>
      <div class="container">
        <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)">
        </meal-list>
      </div>

    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Shaved Ice", "Yummy", 350),
      new Meal("Gelato", "Yummy", 450),
      new Meal("Broccoli", "No so yummy", 250),
      new Meal("Collard Greens", "not so yummy", 350),
    ];
  }

  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
