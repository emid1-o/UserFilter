import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { description: 'Ativo', value: true},
    { description: 'Inativo', value: false},
  ]

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  }


}
