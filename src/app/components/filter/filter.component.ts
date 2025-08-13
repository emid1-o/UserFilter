import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  
  options = [
    {value: true,
      viewValue: 'Sim'
    },
    {value: false,
      viewValue: 'Não'
    }
  ];

}
