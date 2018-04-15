import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRAININGS = '[Trainings] Set Avaliable Trainings';
export const SET_FINISHED_TRAININGS = '[Trainings] Set Finished Trainings';
export const START_TRAINING = '[Trainings] Start Training';
export const STOP_TRAINING = '[Trainings] Stop Training';

export class SetAvaliableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;

  constructor(public payload: Exercise[]) { }
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  constructor(public payload: Exercise[]) { }
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: string) { }
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  SetAvaliableTrainings |
  SetFinishedTrainings |
  StartTraining |
  StopTraining;
