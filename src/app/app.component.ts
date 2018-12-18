import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  // -- variables ('public' is the default accessibility, no need to explicitly declare it unless you're using 'private') -- //

  title="Not your usual Hello World!";
  works=true;
  opened = false;
  handle: string ='@progress.com';
  value: string = "1234567890";
  mask: string = "(000) 000-0000";
  maskValidation: boolean = true;
  codes: Array<string> = [
    '+1','+852', '+91',  '+65',
    '+61', '+359', '+31', '+41'
  ];
  code: string ='+1';
  handles: Array<string> = [
    '@progress.com', '@telerik.com'
  ];


  // -- CTOR -- //

  constructor(
    private notificationService: NotificationService
  ) {}


  // -- Methods -- //

  buttonWorks(){
    this.title = "Kendo UI button works!";
    this.works=false;
  }

  intro(){
    this.title="Not your usual Hello World!";
    this.works=true;
  }

  close() {
    this.opened = false;
  }

  open() {
    this.opened = true;
   }

  show(): void {
    this.notificationService.show({
      content: 'Your data has been saved!',
      animation: { type: 'slide', duration: 500},
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'success', icon: true }
    });
    this.opened = false;
  }
}
