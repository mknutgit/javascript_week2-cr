import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './meal.model';

@pipe({

})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var isHealthy = args[0];
    if (isHealthy === "All") {
      return input;
    } else if (isHealthy === "Healthy") {
      return input.filter(meal) => {
        return meal.calories <= 300;
      });
    } else if (isHealthy === "Unhealthy") {
      return input.filter(meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
