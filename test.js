var aliveSession = window.setInterval("keepMeAlive('ctl00_imgMasterPic')", 60000);

//the year month and date are scheduled training date.
//The h, m, sec, are today's commit time.
//booking on year, month(start at 0), date. Committed at h, m, sec, today.
var d = new Date(2018, 3, 21, 23, 59, 57);

var autoSubmit = window.setInterval(function() { booking(d, 14, 15, '9112024719'); }, 1000);

/**
 * booking @coachID at @date, between @startHour to @endHour.
 */
function booking(date, startHour, endHour, coachID) {
    if (document.referrer.match(/.*BookingCWStudy.*/)) {
        clearInterval(aliveSession);
        clearInterval(autoSubmit);
        console.log(' Already booked skipping ...');
    } else {
        nowDate = new Date(); 
        var startHourEnd = startHour + 1;
        var endHourEnd = endHour + 1;
        var month = date.getMonth() + 1;
        var dayofMonth = date.getDate();
        if ((date.getHours() != nowDate.getHours()) || (date.getMinutes() != nowDate.getMinutes()) || (date.getSeconds() != nowDate.getSeconds())) {
            //console.log('Booking date: ' + date);
            //console.log('Probing coach: ' + coachID + ' On: ' + month + '-' + dayofMonth + ' At: ' + nowDate);
        } else {
            var my = window.open("http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName=" + coachID + "&date=" + date.getFullYear() + "-" + month + "-" + dayofMonth + "&beginTime=" + startHour + "00&trainType=cw&timeLine=" + startHourEnd , "_blank"); 
            var my = window.open("http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName=" + coachID + "&date=" + date.getFullYear() + "-" + month + "-" + dayofMonth + "&beginTime=" + endHour + "00&trainType=cw&timeLine=" + endHourEnd, "_blank"); 
            clearInterval(aliveSession);
            clearInterval(autoSubmit);
            console.log(' Booking finished !!!!!!! ');
            //location.href="javascript:window.open('http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName=9112024719&date=2018-"+month+"-"+day+"&beginTime=1500&trainType=cw&timeLine=16', '_blank'); void 0";
            //var my = window.open("http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName=9112024719&date=2018-"+month+"-"+day+"&beginTime=1500&trainType=cw&timeLine=16", "_blank"); 
            //						//		console.log(my);
            //									//			setTimeout(autoClick, 2000);
            //												//
            //
        }
    }
}

function keepMeAlive(imgName) {
    //myImg = document.getElementById(imgName);
    //if (myImg) myImg.src = myImg.src.replace(/.*$/, '?' + Math.random());
    //console.log(myImg.src);
    http_request = new XMLHttpRequest();
    http_request.open('GET', "http://117.74.136.117:8087/PupilWeb/logging/BookingCarStudy.aspx");
    http_request.send();
    console.log('probe at: ' + new Date() + ' http_request.readyState: ' + http_request.readyState + ' http_request.status:' + http_request.status);
}
