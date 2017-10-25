import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  sendData(data: string) {
    this.messageService.sendData(data)
  }
  ngOnInit() {
  }

}
