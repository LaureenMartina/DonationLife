import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  text: string;

  constructor(private calendar: Calendar) {
    console.log('Hello CalendarComponent Component');
    this.text = 'Hello World';
  }

  openCalendar(){
    this.calendar.openCalendar(new Date()).then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
    );
  }

  addEvent(){
    return this.calendar.createEventInteractively("event title");
  }
  scheduleEvents(){
      this.calendar.hasReadWritePermission().then((result)=>{
      if(result === false){
          this.calendar.requestReadWritePermission().then((v)=>{
              this.addEvent();
          },(r)=>{
              console.log("Rejected");
          })
      }
      else
      {
          this.addEvent();
      }
      });
    }   

}
