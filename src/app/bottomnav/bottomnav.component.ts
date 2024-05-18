import { Component } from '@angular/core';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrl: './bottomnav.component.scss'
})
export class BottomnavComponent {


  onAdd() {
    console.log('Add');
  }
}
