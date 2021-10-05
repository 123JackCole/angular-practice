import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
  }

  // handleUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
