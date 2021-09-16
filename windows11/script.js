let windowskey= document.getElementsByClassName("windowskey")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

windowskey.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
function myFunction() {
    window.open("https://www.google.com/","Chrome","width=1000px,height=500px,left=200px,top=200px");
  }
  function function2() {
    window.open("recyclebin.html","recyclebin","width=1000px,height=500px,left=200px,top=200px");
  }
  function function3() {
    window.open("windowsexplorer.html","file explorer","width=1000px,height=500px,left=200px,top=200px");
  }
  function function4() {
    window.open("https://www.bing.com/","microsoft Edge","width=1000px,height=500px,left=200px,top=200px");
  }
  // Date object
  var today = new Date();

// Current Date
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

  document.getElementById("current_date").innerHTML = date;

// Current Time
  var time = (0+today.getHours())+ ":" + today.getMinutes() ;
  
  document.getElementById("current_time").innerHTML = time;
