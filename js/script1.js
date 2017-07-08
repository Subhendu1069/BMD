function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("search_popup").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("search_popup").style.marginLeft = "250px";
}

function openSearch() {
  var x = document.getElementById('search_popup');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("search-bar").style.marginTop = "120px";
        $('span[id="sbtn"]').removeClass("glyphicon glyphicon-chevron-down");
        $('span[id="sbtn"]').addClass("glyphicon glyphicon-chevron-up");

    } else {
        x.style.display = 'none';
        document.getElementById("search-bar").style.marginTop = "0px";
        $('span[id="sbtn"]').removeClass("glyphicon glyphicon-chevron-up");
        $('span[id="sbtn"]').addClass("glyphicon glyphicon-chevron-down");
        
    }

  };

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

//accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
