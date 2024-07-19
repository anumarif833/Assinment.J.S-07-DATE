// Q.1 Write a program that displays current date and time in your browser.

// var date = new Date ();
// document.write(date, "<br><br>");


// Q. 2 Write a program that alerts the current month in words for example.

// const month = ["janwary","february","march","april","may","june","july","august","september","oucober","november","december",];
// var date = new date();
// var res = month[date.getDate()];
// document.write(res,"<br><br>");


// Q. 3 Write a program that alarts the first 3 letters of the current day, for example if today 
// is sunday then alert will show sun.


// var days = ["sun","mon","tue","wed","thu","fri","sat"];
// var date = new days();
// document.write("Today is ",days[date.getDay()],"<br><br>");


// Q. 4 Write a program that displays a message "it's fun day" if its saturday or sunday today.

// var date = date ();
// var check = date.getdays();
// if(check == 7 ||chack == 6 ){
//     document.write("its fun day")
    
// }else{
//     document.write("working days !!!<br><br>")
// }
// Q. 5 Write a program that show the message "first fifteen days of the month"
// if the date is less then 16th of the month else show "last days of the month".


// var date = new Date ();
// var check = date.getDate();
// if(check>=15){
//     document.write("Last days of the month ","<br><br>")

// }else{
//     document.write("First fifteen days of month","<br><br>")
// }


// Q. 6 Write a program that determines the minutes since midnight, jan. 1 , 1989 and assings it to a varible that hasn't been declared.
// beforehand.use any variable you like to represent the Date object.



// var date = new Date();
// var milisecind = Date.now ();
// var min = (milisecount/(1000*60))
// document.write("current date : ",date,"<br>");
// document.write("milisecound since midnight jan-1-1970 : ",milisecount,"<br>");
// document.write("minutes since midnight jan-1-1970 : ",min,"<br><br>");


// Q. 7 Write a program that tests whether it's befor noon and alert "its AM" else "its PM".


// var date = new Date ();
// var hour = date.getHours();
// if(hour < 12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM")
// }
// document.write("<br><br>")


// Q. 8 Write a program that creates a Date object for the lats day of the lats month of 2020 and
// assings it to varibale named laterDate.


// var laterDate = new Date("sep 30, 2020");
// document.write(laterDate,"<br><br>")


// Q.9  Create a date object of starting date of Ramadan and alert the numbr of days past since Ramdan?
// Note: Its Ramdan was on june 18, 2015

// var dateToday = new Date();
// var Ramdan = new Date("Mar 11 2024");
// var diffirence = dateToday - Ramdan;
// var dayspast = Math.floor(difference/(1000*60*60*24));
// document.write("$(dayspast} dats past since 1st Ramdan 2024 <br><br>");


// Q.10 Write a program that displays in your browser the seconds that elapsed between the reference
// date  and the beginning of 2015.


// var beginningof2015 = new Date("jun 1 2015");
// var diffirenceBetween = dateToday - beginningof2015;
// var secondsPast = (diffirenceBetween/(1000));
// document.write('refrence date : ${dateToday}<br>');
// document.write(secoundsPast," seconds has past since beginning of 2015 <br><br>");


// Q.11 Create a Date object for the current date and time Extract the hours reset date 
// object an hour ahead and finally display the date object in your browser.


// var Todaydate = new Date();
// var hourAgo = TodayDat.getHours();
// hourAge = hourAgo-1
// document.write("current date : " + TodayDate + "<br>");
// todayDate.setHours(hourAgo);
// document.write("1 hour ago, it was : " + todayDat + "<br>");


// Q. 12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?


// var todayDat = new Date();
// var years = todayDat.getFullYear();
// years = years-100;
// document.write("current date :${todayDate} <br>");
// todayDat.setFullYear(years);
// document.write("100 years back,it eas : ${todayDate}<br><br>");


// Q. 13 Write a program to ask the user about his age. Calculate and show his birth year in your brower.


var userInput = +prompt("enter your age");
var date = new Date();
var year = date.getFullYear();
year = year - userInput;
document.write("your age  : "+userInput,"<br>");
document.write("your birth year is : "+year,"<br><br>");



// Q. 14 Write a program to generate your K-Electric bil in your browser All the amounts shuold be 
// rounded off to 2 decimal place. Display the following fields:
// a. Customern Name 
// b. Current Month
// c. Number of unit
// d.Charges per unit
// e.Net Amount payment (within Due Date)
// f. Late pament surcharge
// g. Gross Amount payable (after Due Date)


var userInput = "Anum";
var month = ["janwary","february","march","april","may","june","july","august","september","oucober","november","december",];
var date = new Date();
var currentMon = date.getMonth();
var noOfUnits = 410;
var ChangePerUnit = 16;
var lastPaymentChange = 350;
document.write("<h2>k-Electric Bill</h2>");
document.write("User Name : ",username,"<br>");
document.write("current month  : "+months[currentMon],"<br>");
document.write("No of Units : "+noOfUnits,"<br>");
document.write("change per unit : "+ ChangePerUnit);
document.write("Late Payment Surcharge :",ChangePerUnit,"<br>");
document.write("Net Amount Payable (within Due Date) :",noOfUnits*ChangePerUnit,"<br>");
document.writ("Gross Amount Payable (after Due Date) :",noOfUnits*ChangePerUnit+lastPaymentChange,"<br><br>")