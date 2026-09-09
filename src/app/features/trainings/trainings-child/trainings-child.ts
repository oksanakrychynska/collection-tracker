import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {User} from '../trainings';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-trainings-child',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader
  ],
  templateUrl: './trainings-child.html',
  styleUrl: './trainings-child.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingsChild {
    @Input() user!: User;
    readonly user2 = input<User>();
}
