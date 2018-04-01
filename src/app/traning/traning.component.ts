import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from './training.serve';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.css']
})
export class TraningComponent implements OnInit {
  onGoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChaged.subscribe(
      exercise => {
        if (exercise) {
          this.onGoingTraining = true;
        } else {
          this.onGoingTraining = false;
        }
      }
    );
  }
}
