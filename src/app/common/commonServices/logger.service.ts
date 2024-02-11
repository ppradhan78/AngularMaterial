import { Injectable } from '@angular/core';
import { LogLevel } from '../loglevel';

//@Injectable({
//  providedIn: 'root',
//})
@Injectable()
export class LoggerService {
  logLevel: LogLevel = new LogLevel();
  public count=0 ;

  constructor() {
    this.count = this.count+1;
    //alert('LoggerService call constructor @' + this.count);
   console.log('LoggerService call constructor @'  );
  }
  info(msg: string): void {
    this.logWith(this.logLevel.Info, msg);
  }
  warn(msg: string): void {
    this.logWith(this.logLevel.Warn, msg);
  }
  error(msg: string): void {
    this.logWith(this.logLevel.Error, msg);
  }
  getRandomValue() {
    return Math.random() * 10;
  }
  private logWith(level: any, msg: string): void {
    if (level <= this.logLevel.Error) {
      switch (level) {
        case this.logLevel.None:
          return console.log(msg);
        case this.logLevel.Info:
          return console.info('%c' + msg, 'color: #6495ED');
        case this.logLevel.Warn:
          return console.warn('%c' + msg, 'color: #FF8C00');
        case this.logLevel.Error:
          return console.error('%c' + msg, 'color: #DC143C');
        default:
          console.debug(msg);
      }
    }
  }
}
