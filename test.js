var aliveSession = window.setInterval("keepMeAlive('ctl00_imgMasterPic')", 60000);

//search();

var autoSubmit = window.setInterval("search()", 1000);

function search() {
	//setInterval(function(){
	setDate(2, 4, 9016001067);
	//}, 30000);
}

function setDate(month, day, coachID) {
	if (document.referrer.match(/.*BookingCWStudy.*/)) {
		clearInterval(aliveSession);
		clearInterval(autoSubmit);
		console.log(' Already booked skipping ...');
	} else {
		date = new Date(); 
		if ((date.getHours() != 23) || (date.getMinutes() != 59) || (date.getSeconds() != 57)) {
			console.log('Probing coach: ' + coachID + ' On: ' + month + '-' + day + ' At: ' + date);
		} else {
			var my = window.open("http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName="+coachID+"&date=2018-"+month+"-"+day+"&beginTime=1400&trainType=cw&timeLine=15", "_blank"); 
			var my = window.open("http://117.74.136.117:8087/PupilWeb/logging/BookingCWStudy.aspx?coachName="+coachID+"&date=2018-"+month+"-"+day+"&beginTime=1500&trainType=cw&timeLine=16", "_blank"); 
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
	myImg = document.getElementById(imgName);
	if (myImg) myImg.src = myImg.src.replace(/.*$/, '?' + Math.random());
	console.log(myImg.src);
}
