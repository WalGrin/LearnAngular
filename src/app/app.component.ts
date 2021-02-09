import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  p: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
  });
}
