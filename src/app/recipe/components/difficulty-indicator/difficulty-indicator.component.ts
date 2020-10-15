import { transformFirstLetterInUppercase } from './../../../core/utils/system.utils';
import { SystemOption } from './../../../core/models/system-option.model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-difficulty-indicator',
  templateUrl: './difficulty-indicator.component.html',
  styleUrls: ['./difficulty-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DifficultyIndicatorComponent implements OnInit {
  @Input() recipeDifficulty: SystemOption;

  public difficultyLevel: object[];
  public tooltipDifficultyLevel: string;
  private counter: number;

  constructor() { }

  ngOnInit(): void {
    this.setDifficultyLevel();
  }

  private setDifficultyLevel(): void {
    this.tooltipDifficultyLevel = transformFirstLetterInUppercase(this.recipeDifficulty.displayValue);
    switch (this.recipeDifficulty.systemValue) {
      case 1:
        this.difficultyLevel = this.generateNumberDifficultyIcon(1);
        break;
      case 2:
        this.difficultyLevel = this.generateNumberDifficultyIcon(2);
        break;
      case 3:
        this.difficultyLevel = this.generateNumberDifficultyIcon(3);
        break;
      default:
        this.difficultyLevel = this.generateNumberDifficultyIcon(0);
        break;
    }
  }

  private generateNumberDifficultyIcon(difficulty: number): object[] {
    const numberIconDisplayed: object[] = [];

    for (this.counter = 0; this.counter < difficulty; this.counter++) {
      numberIconDisplayed.push({});
    }

    return numberIconDisplayed;
  }


}
