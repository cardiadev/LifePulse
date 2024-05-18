import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'LifePulse';
  showSplash = true;
  animationState: 'visible' | 'hidden' = 'visible';

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'hidden';
      setTimeout(() => {
        this.showSplash = false;
      }, 1000); // Tiempo de la animación de fade-out
    }, 500); // Tiempo que dura el splash screen visible
  }

}
