import {DomSanitizer} from '@angular/platform-browser';
import {Pipe, PipeTransform, SecurityContext} from '@angular/core';

@Pipe({name: 'sanitize'})
export class CgtSanitizePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) { }

  public transform(value: any, type = 'html'): any {
    if (!value) {
      return undefined;
    } else if (value === 'none') {
      return this._domSanitizer.sanitize(SecurityContext.NONE, value);
    } else if (value === 'style') {
      return this._domSanitizer.sanitize(SecurityContext.STYLE, value);
    } else if (value === 'script') {
      return this._domSanitizer.sanitize(SecurityContext.SCRIPT, value);
    } else if (value === 'url') {
      return this._domSanitizer.sanitize(SecurityContext.URL, value);
    } else if (value === 'resource') {
      return this._domSanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
    } else {
      // default to HTML
      return this._domSanitizer.sanitize(SecurityContext.HTML, value);
    }
  }
}
