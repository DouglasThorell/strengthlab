import {Component, Input, OnInit} from '@angular/core';
import {CurrentSessionService} from '../current-session-service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-session-title',
  templateUrl: './session-title.component.html',
  styleUrls: ['./session-title.component.scss']
})
export class SessionTitleComponent implements OnInit {

  @Input() title: string;
  subscription: Subscription;
  currentExercise = 'no exercise selected yet';

  constructor(private currentSessionService: CurrentSessionService) {
    this.subscription = currentSessionService.currentExercise$.subscribe(currentExercise => {
      this.currentExercise = currentExercise;
    })
  }

  ngOnInit() {
  }

}
