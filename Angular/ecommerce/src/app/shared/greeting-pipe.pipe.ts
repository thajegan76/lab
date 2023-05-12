import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipePipe implements PipeTransform {

  /*
  transform(value: Date | undefined, ...args: unknown[]): unknown {
    if (value === undefined) return "";
    let hours:number = value.getHours();
    if (hours < 12) return args[0] + " Good Morning " + args[0];
    if (hours >= 12 && hours <= 17) return args[0] + " Good Afternoon " + args[0];
    return args[0] + "Good Evening " + args[0];
  }
  */

  transform(value: Date | undefined, args: string): unknown {
    if (value === undefined) return "";
    let hours:number = value.getHours();
    let timeonly = value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds();
    if (hours < 12) return args + " Good Morning " +  timeonly + " " + args;
    if (hours >= 12 && hours <= 17) return args + " Good Afternoon " + timeonly + " " + args;
    return args + "Good Evening " + timeonly + " " + args;
  }

}
