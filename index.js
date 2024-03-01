


// The funtion for dropdown menu 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



// This part
var mainHeaderBox = document.querySelector (".main-header-box"); 

mainHeaderBox.addEventListener ("scroll", function(){
    mainHeaderBox.style.position = "fixed";
});



// changing the innerHTML of the services items
var serviceItem1 = document.querySelector("#item1");

serviceItem1.addEventListener("click", function(){
    document.querySelector("#item1").innerHTML = ("REPORTING & ANALYTICS");
});


document.querySelector("#item2").addEventListener("click", function(){
    document.querySelector("#item2").innerHTML = ("AUTOMATION");
});

document.querySelector("#item3").addEventListener("click", function(){
    document.querySelector("#item3").innerHTML = ("DATA ANALYSIS");
});

document.querySelector("#item4").addEventListener("click", function(){
    document.querySelector("#item4").innerHTML = ("COMPETITOR ANALYSIS");
});

document.querySelector("#item5").addEventListener("click", function(){
    document.querySelector("#item5").innerHTML = ("LEAD CONVERSION");
});


