import { PreparationStep } from './../../../core/models/preparationStep.model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-preparation-steps-display-data',
  templateUrl: './preparation-steps-display-data.component.html',
  styleUrls: ['./preparation-steps-display-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreparationStepsDisplayDataComponent implements OnInit {

  @Input() preparationStep: PreparationStep;

  constructor() { }

  ngOnInit(): void {
  }

}
