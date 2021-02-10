import { LocalCounterService } from './services/local-counter.service';
import { AppCounterService } from './services/app-counter.servise';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
})
export class AppComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
