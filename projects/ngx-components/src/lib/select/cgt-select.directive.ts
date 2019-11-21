import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'input[matInput]'
})
export class CgtSelectDirective {
  @HostListener('input', ['$event.target.value'])
  public updateQuery(query: string): void {
    console.log('CgtSelectDirective::updateQuery [' + query + ']');
  }
}
