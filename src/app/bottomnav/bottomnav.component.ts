import { Component } from '@angular/core';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrl: './bottomnav.component.scss'
})
export class BottomnavComponent {


  constructor(public dialog: MatDialog) { }

  onAdd(): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '400px',
      height: '520px',
      panelClass: "confirmation-modal",

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
