import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor() { }

  private meetings: any[] = [];

  addMeeting(meeting:any)
  {
    this.meetings.push(meeting);
  }

  getMeetings(){
    return this.meetings;
  }
}
