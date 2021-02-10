import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  counter = 0;

  constructor(public logService: LogService) {}

  increase() {
    this.logService.log('increase counter...');
    this.counter++;
  }

  decriase() {
    this.logService.log('decriase counter...');
    this.counter--;
  }
}
