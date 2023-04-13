function displayTime(){
    const d = new Date();

   let hour = d.getHours();
    let min = d.getMinutes();
   let sec = d.getSeconds();
    
   let amOrpm = "AM";

   if(hour >=12){
       amOrpm = "PM";
   }

   if(hour<10){
       hour = "0" + hour;
   }

   if(min < 10){
       min = "0" + min;
   }

   if(sec<10){
       sec = "0" + sec;
   }

    document.getElementById("clock").innerHTML = hour + ":"  +  min + ":" + sec + " " + amOrpm;
}

setInterval(displayTime, 1000)