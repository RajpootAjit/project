import { Component} from '@angular/core';
import { MeetingService } from '../meetservice/meeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-detailes',
  templateUrl: './meeting-detailes.component.html',
  styleUrls: ['./meeting-detailes.component.css']
})
export class MeetingDetailesComponent{

  meetings: any[] = []

  constructor(private meetingservice: MeetingService, private router: Router){
      this.meetings = this.meetingservice.getMeetings()
  }

  addMore(){
    this.router.navigateByUrl('/meet')
    
  }
  logout(){
    this.router.navigateByUrl('/login')
  }
  

}
