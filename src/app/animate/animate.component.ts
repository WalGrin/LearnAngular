import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visiable = !visiable">Toggle</button>
    <hr />
    <div [@bounce] class="rect" *ngIf="visiable"></div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [transition('void => *', useAnimation(bounce))]),
    trigger('bounce', [
      transition(
        '* => void',
        useAnimation(bounceOutUp, {
          params: {
            timing: 3,
            delay: 0.3,
          },
        })
      ),
    ]),
  ],
})
export class AnimateComponent implements OnInit {
  visiable = true;

  constructor() {}

  ngOnInit(): void {}
}
