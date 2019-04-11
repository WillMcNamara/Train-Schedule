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
    
})





