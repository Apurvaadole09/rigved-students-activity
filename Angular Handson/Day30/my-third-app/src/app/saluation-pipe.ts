import {Pipe ,PipeTransform} from '@angular/core';

@Pipe({
    name : 'saluation'
})
export class SaluationPipe implements PipeTransform {
    transform(name : string ,gender?:string): string {
       if (gender == "Male" || gender == undefined)
       return "Mr." + name;
       else 
       return "Ms." + name;
    }
}