import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Aaron', lastName: 'Punzalan', email: 'aaron.punz@gmail.com', role: 'Web Developer' },   
    { firstName: 'Patrick', lastName: 'Perez', email: 'patrick.pirez@google.com', role: 'Software Engineer' }, 
    { firstName: 'Stephen', lastName: 'Curry', email: 'stepitnow.carry@google.com', role: 'Software Engineer' }, 
    { firstName: 'Louis', lastName: 'Garcia', email: 'louis.garcia@yahoo.com', role: 'Supervisor' }, 
    { firstName: 'Zandro', lastName: 'Zulueta', email: 'zrando.zulunim@google.com', role: 'Senior Developer' } 
    ];
}
