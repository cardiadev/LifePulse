import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfettiService } from '../confetti.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    private confettiService: ConfettiService
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  addBloodPressure(): void {
    this.confettiService.launchConfetti();
    this.dialogRef.close();
  }

}
