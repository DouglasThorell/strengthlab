import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NotificationService {
  public notification: Subject<string> = new Subject();
  public exercise: Subject<string> = new Subject();
  constructor() { }

}
