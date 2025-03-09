import { NgFor } from '@angular/common';
import {Component, OnInit} from '@angular/core';
/*import * as $ from 'jquery'*/
declare const showAlert:any;
@Component({
  selector: 'app-book-a-call',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-a-call.component.html',
  styleUrl: './book-a-call.component.css'
})
export class BookACallComponent implements OnInit{
    ngOnInit() {
        this.hello();
    }
    constructor() {
      this.generateTimes();
    }
    // ---------variables---------
    days = [
      { value: 'sunday', label: 'Sunday' },
      { value: 'monday', label: 'Monday' },
      { value: 'tuesday', label: 'Tuesday' },
      { value: 'wednesday', label: 'Wednesday' },
      { value: 'thursday', label: 'Thursday' },
      { value: 'friday', label: 'Friday' },
      { value: 'saturday', label: 'Saturday' }
    ];
    times: Array<{ value: string, label: string }> = [];
    months: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    timezones: { value: string, label: string }[] = [
      { value: 'wat', label: 'West African Time' },
      { value: 'cat', label: 'Central Africa Time' },
      { value: 'eat', label: 'East Africa Time' },
      { value: 'gmt', label: 'Greenwich Mean Time' },
      { value: 'cet', label: 'Central European Time' },
      { value: 'est', label: 'Eastern Standard Time' },
      { value: 'pst', label: 'Pacific Standard Time' },
      { value: 'cst', label: 'Central Standard Time' },
      { value: 'ist', label: 'Indian Standard Time' },
      { value: 'jst', label: 'Japan Standard Time' },
      { value: 'aest', label: 'Australian Eastern Standard Time' }
    ];
// ------------functions----------

    generateTimes() {
      const timesArray: { value: string, label: string }[] = [];
      const amPm = ['am', 'pm'];
      amPm.forEach(period => {
        for (let hour = 1; hour <= 12; hour++) {
          const timeValue = `${hour < 10 ? '0' + hour : hour}:00${period}`;
          const timeLabel = `${hour < 10 ? '0' + hour : hour}:00 ${period.toUpperCase()}`;
          timesArray.push({ value: timeValue, label: timeLabel });
        }
      });
      this.times = timesArray;
    }

hello(){
      showAlert();
}
    /*showAlert() {
    var name = $(document).getElementById("name").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var time = document.getElementById("time").value;
    var timezone = document.getElementById("timezone").value;
    var messageBox = document.getElementById("message-box");
    messageBox.innerHTML = `
        <img src="photo/petrong.png" >
        <h1><strong> 30 Minute Meeting </strong> </h1>
        <h2><strong>Hello , </strong> ${name}</h2>
        <h3>Meeting Details</h3>
        <p><strong>Day :</strong> ${day}</p>
        <p><strong>Month :</strong> ${month}</p>
        <p><strong>Time :</strong> ${time}</p>
        <p><strong>Time Zone:</strong> ${timezone}</p>
    `;
    messageBox.style.display = "block";
  }*/
}
