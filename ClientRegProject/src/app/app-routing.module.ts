import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MeetComponent } from './meet/meet.component';
import { MeetingDetailesComponent } from './meeting-detailes/meeting-detailes.component';

const routes: Routes = [
  {path: "", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "meet", component: MeetComponent},
  {path: "meeting-details", component: MeetingDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
