import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  constructor(public dialogRef: MatDialogRef<AddModalComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
