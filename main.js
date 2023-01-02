

    // i have store the names mounth and days "monthName" and "dayNames"*****************

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = ['Sundey', 'Mondey', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];

    // creat a function**************************

    function date(){
        var date = new Date()
        var hrs = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()

    //AM or PM

    if (hrs > 12){
        document.getElementById('period').innerHTML = 'PM'
    }else{
        document.getElementById('period').innerHTML = 'AM'
    } 

    // variable 'seconds' is less than 10, be preceded by a zero when converting to text
    
    if(hrs < 10){
        hrs = '0' + hrs
    }
    if(min < 10){
        min = '0' + min
    }
    if(sec < 10){
        sec = '0' + sec
    }

    document.getElementById('hour'). innerHTML = hrs;
    document.getElementById('minutes'). innerHTML = min;
    document.getElementById('seconds'). innerHTML = sec;

    // now the information of month, day, year has to be receved from the device

    var d = date.getDay()
    var m = date.getMonth()
    var y = date.getFullYear()

    var full_date = dayNames[d] + "," +  " " + date.getDate() + monthName[m] + "," + " " + y;
    document.getElementById('date').innerHTML = full_date;

}  
setInterval(date, 1000);