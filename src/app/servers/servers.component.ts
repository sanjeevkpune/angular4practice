import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus:string = "No Servers yet created";
  constructor() {
   /* setTimeout(function () {
      this.allowAddServer = true;
    }, 5000);*/
  }

  ngOnInit() {
  }
  private serverID: number = 101;
  private serverStatus: string;

  /**
   * getServerStatus
   */
  public getServerStatus() {
    return "offline";
  }

  getServerID() {
    return this.serverID;
  }

  onAddServer(){
    this.serverCreationStatus="Server created !!!";
  }
}
