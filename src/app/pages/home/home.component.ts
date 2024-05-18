import { Component } from '@angular/core';

interface Measurement {
  day: string;
  time: string;
  systolic: number;
  diastolic: number;
  pulse: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  measurements: Measurement[] = [
    {
      day: 'Monday',
      time: '12:34',
      systolic: 145,
      diastolic: 89,
      pulse: 79
    },
    {
      day: 'Tuesday',
      time: '14:20',
      systolic: 130,
      diastolic: 85,
      pulse: 76
    },
    {
      day: 'Wednesday',
      time: '09:15',
      systolic: 120,
      diastolic: 80,
      pulse: 72
    },
    {
      day: 'Thursday',
      time: '10:30',
      systolic: 138,
      diastolic: 90,
      pulse: 80
    },
    {
      day: 'Friday',
      time: '08:45',
      systolic: 142,
      diastolic: 88,
      pulse: 78
    },
    {
      day: 'Saturday',
      time: '16:00',
      systolic: 135,
      diastolic: 82,
      pulse: 75
    }
  ];

}
