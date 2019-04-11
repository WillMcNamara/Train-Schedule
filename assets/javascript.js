//get 4 values from html input

//store them in database

//create 5 values for table

//append to table
 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCGP63-ivmncsfOUzhXc8CYLcskomxNmzk",
    authDomain: "train-schedule-874e8.firebaseapp.com",
    databaseURL: "https://train-schedule-874e8.firebaseio.com",
    projectId: "train-schedule-874e8",
    storageBucket: "train-schedule-874e8.appspot.com",
    messagingSenderId: "810033130526"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function(){

    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log(this);

        var trainName = $("#name-input").val();
        var trainDestination = $("#destination-input").val();
        var trainFreq = $("#freq-input").val();
        var trainTime = $("#time-input").val();

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            freq: trainFreq,
            time: trainTime,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        }

        console.log(trainName);
        console.log(trainFreq);

        database.ref().push(newTrain);

        $("#name-input").val("");
        $("#date-input").val("");
        $("#role-input").val("");
        $("#rate-input").val("");
    })
    
    database.ref().on("child_added", function(snap) {
        console.log(snap.val());

        var sv = snap.val();
    
        var newName = sv.name;
        var newDest = sv.destination;
        var newFreq = sv.freq;
        var newTime = sv.time;
    
        var inputTime = moment(newTime, "hh:mm");
        var formTime = inputTime.format('LT');
        //get remainder of current time minus first train, and subtract frequency by result to find time until next train.
        var minutesAway = newFreq - ((moment().diff(inputTime, "minutes")) % newFreq)
        //format next time as function of current time and minutes until next train        
        var nextTime = moment().add(minutesAway, 'minutes').format('LT');
        //time until first train if before first train of day
        var first = inputTime.diff(moment(), "minutes")


        var newRow = $("<tr>");
        newRow.append("<td>" + newName + "</td>");
        newRow.append("<td>" + newDest + "</td>");
        newRow.append("<td>" + newFreq + "</td>");
        
        //if first train has come then apply schedule, otherwise next time is first train
        if (moment().diff(inputTime, "minutes") > 0) {
            newRow.append("<td>" + nextTime + "</td>");
            newRow.append("<td>" + minutesAway + "</td>");
        }
        else {
            newRow.append("<td>" + formTime + "</td>");
            newRow.append("<td>" + first + "</td>");
        }
        console.log(newRow);
    
    
        $("tbody").append(newRow);
       
    })
})





