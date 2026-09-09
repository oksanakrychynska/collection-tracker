import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit, signal, WritableSignal
} from '@angular/core';
import {TrainingsChild} from './trainings-child/trainings-child';
import {MatButton} from '@angular/material/button';
import {KeyValuePipe} from '@angular/common';

export interface User {
  name: string,
}

@Component({
  selector: 'app-trainings',
  imports: [
    TrainingsChild,
    MatButton,
    KeyValuePipe
  ],
  templateUrl: './trainings.html',
  styleUrl: './trainings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trainings implements OnInit, DoCheck{
  user: User = {
    name: 'Oksana',
  }
  readonly user2: WritableSignal<User> = signal({
    name: 'Dmytro',
  });

  readonly frequencies = new Map<number, number>();
  // cd = inject(ChangeDetectorRef);



  ngOnInit() {
    setTimeout(() => {
      this.user.name = 'Anna'; // не оновиться
      this.user2().name = 'ihor';
      // this.user = {...this.user, name: 'Helga 3'};
      // this.cd.detectChanges();
    }, 1000);

    this.frequencyCounter();
  }

  ngDoCheck() {
    console.log('ON CHANGES');
  }

  protected updateUser() {
    // this.user.name = 'Helga';
    this.user = {...this.user, name: 'Helga 2'}; // click event initiates the change detection cycle
    console.log('UPDATE USER, just click');
  }


  frequencyCounter() {
    const numbers = [1, 2, 3, 1, 5, 3, 1, 9, 2];
    numbers.forEach(num => {
      this.frequencies.set(num, (this.frequencies.get(num) || 0) + 1);
    });

    console.log(this.frequencies);
    return this.frequencies;
  }
}


