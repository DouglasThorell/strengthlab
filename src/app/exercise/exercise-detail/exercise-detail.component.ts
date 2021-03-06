import {Component, Inject, Input, OnInit} from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss'],
})
export class ExerciseDetailComponent implements OnInit {

  @Input() exercise: Exercise;
  name: string;
  currentExercise: any;

  constructor(private router: Router,
              private exerciseService: ExerciseService,
              public dialog: MdDialog,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  deleteExercise() {
    this.exerciseService.deleteExercise(this.exercise)
  }

  updateExercise() {
    this.exerciseService.updateExercise(this.exercise, this.exercise.name)
  }

  startSession() {

    this.messageService.sendData(this.exercise.id);
    this.messageService.sendExercise(this.exercise);
    this.exerciseService.updateExerciseTime(this.exercise);
    this.router.navigateByUrl('current-session')  } // trying this way, choose the one that works =)



  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(this.exercise.name);
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }


  openDialog() {
    const dialogRef = this.dialog.open(ExerciseDetailDialogComponent, {
      // width: '400px',
      // height: '400px',
      data: {name: this.exercise.name, oldName: this.exercise.name}
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

    closeDialog() {
      this.dialogRef.close();
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
  }



