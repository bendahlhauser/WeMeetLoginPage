// JavaScript Document
"use strict"
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var firstMonth = 0;
var lastMonth = 11;
var numMonths = 12;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDate = document.getElementById("currentDate");
showCalendar(currentMonth, currentYear);

// Testing
//var output = document.getElementById("testing");
//output.innerHTML = today;

function nextMonth() {
    currentYear = (currentMonth === lastMonth) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % num Months;
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
		var tblCell = "";
		var cellTextEmpty = "";
		
		
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
                var cellTextHasDate = document.createTextNode(date);
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