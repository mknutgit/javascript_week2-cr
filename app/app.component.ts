import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Meal Tracker</h1>
         <p>Go ahead, track your meals and calorie counts!</p>
      </div>

      <meal-list [mealList]="meals" (onMealSelect)="taskWasSelected($event)">
      </meal-list>

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

  }
}
