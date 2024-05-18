import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
  animations: [
    trigger('fadeOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('1s')
      ])
    ])
  ]
})
export class SplashScreenComponent {
  @Input() animationState: 'visible' | 'hidden' = 'visible';


}
