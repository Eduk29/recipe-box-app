import { PreparationStep } from './../../../core/models/preparationStep.model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-preparation-steps-list',
  templateUrl: './preparation-steps-list.component.html',
  styleUrls: ['./preparation-steps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreparationStepsListComponent implements OnInit {

  @Input() preparationSteps: PreparationStep[];

  constructor() { }

  ngOnInit(): void {
  }

}
