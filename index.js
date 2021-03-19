function time(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getUTCSeconds();
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(time , 1000);


