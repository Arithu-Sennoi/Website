let day = new Date()

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let huh = function(){
    day = new Date();
    document.getElementById("day").innerHTML = week[day.getDay()];
    document.getElementById("date").innerHTML = day.getDate();
    document.getElementById("month").innerHTML = month[day.getMonth()];
}

huh();

setInterval(huh,1000);
