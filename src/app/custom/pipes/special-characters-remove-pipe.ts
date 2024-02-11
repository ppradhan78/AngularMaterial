import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appSpecialCharRemove'
})
export class SpecialCharactersRemovePipe implements PipeTransform {

  transform(value: string): string {

    const changedValue = this.toReplace(value);
    return changedValue;
  }

  private toReplace(text: string) {
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
