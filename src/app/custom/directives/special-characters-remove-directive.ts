import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appSpecialCharRemove]'
})
export class SpecialCharactersRemoveDirective {
  
  constructor(public ef: ElementRef) { }

  // listens to input event on the target HTML input element
  // and calls inputListener() function
  @HostListener('input', ['$event.target.value'])
  inputListener(value: string): void {
    const val = this.toReplace(value);
    this.ef.nativeElement.value = val;
  }

  private toReplace(text: string) {
    //if (text == '$')
    //  text = '';
    return text
      .replace(/!/gi, '')
      .replace(/@/gi, '')
      .replace(/#/gi, '')
      .replace(/%/gi, '')
      .replace(/&/gi, '')
      .replace(/</gi, '')
      .replace(/>/gi, '')
      .replace(/$ /gi, ' ')

  }

}
