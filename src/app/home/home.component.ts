import {Component, DoCheck, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }


}
