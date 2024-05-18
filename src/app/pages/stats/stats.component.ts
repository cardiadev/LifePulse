import { Component } from '@angular/core';

interface HypertensionCategory {
  category: string;
  systolic: string;
  diastolic: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  categories: HypertensionCategory[] = [
    {
      category: 'Optimal',
      systolic: '<130',
      diastolic: '<85'
    },
    {
      category: 'Normal',
      systolic: '120 - 129',
      diastolic: '80 - 84'
    },
    {
      category: 'High Normal',
      systolic: '130 - 139',
      diastolic: '85 - 89'
    },
    {
      category: 'Grade 1',
      systolic: '140 - 159',
      diastolic: '90 - 99'
    },
    {
      category: 'Grade 2',
      systolic: '160 - 179',
      diastolic: '100 - 109'
    },
    {
      category: 'Grade 3',
      systolic: '> 180',
      diastolic: '>110'
    },
    {
      category: 'Isolated',
      systolic: '> 140',
      diastolic: '<90'
    }
  ];

}
