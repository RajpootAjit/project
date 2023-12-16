import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../meetservice/meeting.service';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent {

  formsubmitted: boolean = false;
  login: FormGroup;

  constructor(private router: Router, private meetingservice:MeetingService) {
    this.login = new FormGroup({
      meeting: new FormControl('', Validators.required),
      people: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  submitClient() {
    this.formsubmitted = true;
    if (this.login.valid) {
      this.meetingservice.addMeeting(this.login.value)
      alert("Congratulations, the meeting has been scheduled successfully");
      this.router.navigateByUrl('/meeting-details');
      this.login.reset();
    } else {
      alert("Please fill in all the details.");
    }
  }
}
