import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService, AuthenticationService } from '../_services';

import { ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick


import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { DayViewHour } from 'calendar-utils';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios'
};


// Testing
//var output = document.getElementById("testing");
//output.innerHTML = today;
"use strict"
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var firstMonth = 0;
var lastMonth = 11;
var numMonths = 12;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDate = document.getElementById("currentDate");

function nextMonth() {
    currentYear = (currentMonth === lastMonth) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % numMonths;
    showCalendar(currentMonth, currentYear);
}

function prevMonth() {
    currentYear = (currentMonth === firstMonth) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === firstMonth) ? lastMonth : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
	
	var maxDays = 32;
    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = maxDays - new Date(year, month, maxDays).getDate();

    var table = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    table.innerHTML = "";

    // filling data about month
    currentDate.innerHTML = months[month] + " " + year;

    // creating all cells
    var date = 1;
    for (var x = 0; x < 6; x++) {
        // creates a table row
        var tblRow = document.createElement("tr");
		var tblCell: HTMLTableDataCellElement;
		var cellTextEmpty: Text;
		
		
        //creating individual cells, filling them up with data.
        for (var y = 0; y < 7; y++) {
            if (x === 0 && y < firstDay) {
				tblCell = document.createElement("td");
                cellTextEmpty = document.createTextNode("");
                tblCell.appendChild(cellTextEmpty);
                tblRow.appendChild(tblCell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
				tblCell = document.createElement("td");
                var cellTextHasDate = document.createTextNode(date.toString());
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    tblCell.classList.add("today_color");
                } // color today's date
                tblCell.appendChild(cellTextHasDate);
                tblRow.appendChild(tblCell);
                date++;
            }


        }
        table.appendChild(tblRow); // appending each row into calendar body.
        
    }

}



@Component({ 
    templateUrl: 'meetings.component.html', 
    styleUrls: ['meetings.component.css'],
    //selector: 'mwl-demo-component',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    //encapsulation: ViewEncapsulation.None
})

export class MeetingsComponent implements OnInit {
    currentUser: User;
    users = [];
    
    multi: Date;

    multiSettings: MbscCalendarOptions = {
        display: 'inline',
        select: 'multiple'
    }
    

    

    /*
    //Another one
    @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent; // the #calendar in the template

    calendarVisible = true;
    calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
    calendarWeekends = true;
    calendarEvents: EventInput[] = [
        { title: 'Event Now', start: new Date() }
    ];

    handleDateClick(arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            })
        }
    } //End of another one
    */

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        
    }

    

    ngOnInit() {
        this.loadAllUsers();
        
        showCalendar(currentMonth, currentYear);

    }

    

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}




  
  



export class AppComponent {

  
}
