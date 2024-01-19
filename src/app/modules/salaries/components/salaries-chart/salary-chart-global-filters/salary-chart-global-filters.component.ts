import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalFiltersFormGroup, SalaryChartGlobalFiltersData } from './global-filters-form-group';

@Component({
  selector: 'app-salary-chart-global-filters',
  templateUrl: './salary-chart-global-filters.component.html',
  styleUrl: './salary-chart-global-filters.component.scss'
})
export class SalaryChartGlobalFiltersComponent implements OnInit {

  @Input()
  filterData: SalaryChartGlobalFiltersData | null = null;

  @Output()
  readonly filtersApplied = new EventEmitter<SalaryChartGlobalFiltersData>();

  @Output()
  readonly filtersReset = new EventEmitter<void>();

  form: GlobalFiltersFormGroup | null = null;

  ngOnInit(): void {
    this.form = new GlobalFiltersFormGroup(this.filterData);
  }

  apply(): void {
    if (!this.form) {
      return;
    }

    const data = this.form.data();
    if (data) {
      this.filtersApplied.emit(data);
    }
  }

  reset(): void {
    if (!this.form) {
      return;
    }

    this.form.reset();
    this.filtersReset.emit();
  }
}