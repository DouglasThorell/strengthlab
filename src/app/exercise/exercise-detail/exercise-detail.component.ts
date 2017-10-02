import {Component, Inject, Input, OnInit} from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss'],
})
export class ExerciseDetailComponent implements OnInit {

  @Input() exercise: Exercise;
  name: string;

  constructor(private exerciseService: ExerciseService, public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  deleteExercise() {
    this.exerciseService.deleteExercise(this.exercise.$key)
  }

  updateExercise() {
    this.exerciseService.updateExercise(this.exercise.$key, this.exercise)
  }

  openDialog() {
    let dialogRef = this.dialog.open(ExerciseDetailDialogComponent, {
      width: '400px',
      data: {name: this.exercise.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog closed with result: ${result}`);
      this.exercise.name = result;
      this.updateExercise();
    });
    dialogRef.afterOpen().subscribe(result => {
      console.log('dialog opened');
    })
  }
}
  @Component({
    selector: 'app-exercise-detail-dialog',
    templateUrl: 'exercise-detail-dialog.html'
  })
  export class ExerciseDetailDialogComponent {
    constructor(public dialogRef: MdDialogRef<ExerciseDetailDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  }



