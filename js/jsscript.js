//SideNav 

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    $('a[id="btn"]').removeClass("glyphicon glyphicon-menu-right");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = '#eee';
    $('a[id="btn"]').addClass("glyphicon glyphicon-menu-right");
}

//Search Bar
function openSearchdate() {
  var x = document.getElementById('search_popup_date');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("search-bar").style.marginTop = "100px";
        $('div[id="sbtn"]').removeClass("glyphicon glyphicon-menu-down");
        $('div[id="sbtn"]').addClass("glyphicon glyphicon-menu-up");

    } else {
        x.style.display = 'none';
        document.getElementById("search-bar").style.marginTop = "0px";
        $('div[id="sbtn"]').removeClass("glyphicon glyphicon-menu-up");
        $('div[id="sbtn"]').addClass("glyphicon glyphicon-menu-down");
        
    }
    
  };

//Date calendar
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

//canvas

$(document).ready(function() {
  fillProgressBar('abend', '#f66', 100, 'Total Abends');
  fillProgressBar('openonl', '#f66', 50, 'Open Online Issues');
  fillProgressBar('openedp', '#f66', 30, 'Open EDP Issues');
  fillProgressBar('inc', '#3375aa', 60, 'INC Raised');
  fillProgressBar('mail', '#3375aa', 20, 'Mail Sent');
  fillProgressBar('inprog', '#3375aa', 70, 'In-Progress');
  fillProgressBar('resolve', '#7c7', 44, 'Resolved');
  fillProgressBar('reminder', '#3375aa', 56, 'Reminder Sent');
  fillProgressBar('response', '#3375aa', 30, 'Response Received');

});


function fillProgressBar(id, color, progress, text) {
  var p = 0;
  var interval = setInterval(function() {

    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 90;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    var counterClockwise = false;
    if (progress == null)
      progress = 100;

    context.clearRect(0, 0, 250, 250);

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.fillStyle = '#eee';
    context.fill();

    radius = 100;
    startAngle = 1.5 * Math.PI;
    //endAngle = 1.5 * Math.PI + (2 * Math.PI) * progress / 100;
    endAngle = 1.5 * Math.PI + (2 * Math.PI) * p / 100;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 20;
    context.strokeStyle = color;
    context.stroke();

    if (text == null)
      text = "HOLA";

    context.fillStyle = '#000000';
    context.font = "22px Calibri";
    var xText = 125 - (context.measureText(text).width / 2);
    var pText = 125 - (context.measureText(progress).width / 2);
    context.fillText(progress, pText, 100);
    context.fillText(text, xText, 130);
    if (p == progress)
      clearInterval(interval);
    p++;
  }, 20);
}

