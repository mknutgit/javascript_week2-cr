import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",

})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var isHealthy = args[0];
    if (isHealthy === "healthy") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (isHealthy === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
