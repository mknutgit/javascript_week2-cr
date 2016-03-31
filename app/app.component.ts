import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Meal Tracker</h1>
         <p>Go ahead, track your meals and calorie counts!</p>
      </div>

      <meal-list [meals]="meals"></meal-list>

    </div>
  `
})

export class AppComponent {

}
