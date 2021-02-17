import { PreparationStep } from './../../../core/models/preparationStep.model';
import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-preparation-steps-display-data',
	templateUrl: './preparation-steps-display-data.component.html',
	styleUrls: ['./preparation-steps-display-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreparationStepsDisplayDataComponent implements OnInit {
	@Input() preparationStep: PreparationStep;
	@Input() readOnly?: boolean = true;
	@Output() eventRemovePreparationStep = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	public removePreparationStep(preparationStep: PreparationStep): void {
		this.eventRemovePreparationStep.emit(preparationStep);
	}
}
