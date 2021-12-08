var timeDisplayEl = $('#currentDay');
var textAreaEl = $('.textarea')
var storedText = localStorage.getItem('storedText');

// function of current day and time
function currentDay() {
    var rightNow = moment().format('MMM DD, YYYY [at] H:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//function to check if it is past present or future 
// and change color of textarea
var checkTime = function () {
    // get hour from 1 to 24
    var currentTime = moment().format('H');
    var timeBlockElements = $(".textarea");
    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {
        //get element as string to manipulate
        var elementID = timeBlockElements[i].id;
        var manipID = document.getElementById(timeBlockElements[i].id)
        //remove class every time it loops
        $(timeBlockElements[i].id).removeClass(".present .past .future");
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

function save(){
    var text = document.getElementsByTagName('textarea')[0].value;
    localStorage.setItem('storedText', JSON.stringify(text))
    document.getElementsByTagName('textarea')[0].innerHTML = text
}

function get(){
    localStorage.getItem('storedText', JSON.stringify(storedText))
    document.getElementsById('09').innerHTML = storedText
}

//checking every minute for present past future
setInterval(checkTime(), (1000 * 60) * 1);
// to make the clock interactive
setInterval(currentDay, 1000);