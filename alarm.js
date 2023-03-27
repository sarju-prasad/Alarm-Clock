var sound=new  Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
sound.loop=true;

var h2=document.querySelector("#clock");

//Display current time by the second
var currentTime=setInterval(function(){
    var date=new Date();
    //getting the hours
    var hours=(date.getHours());
    if(hours>12){
        hours=12-hours;
    }
    //getting the minutes
    var minutes=date.getMinutes();
    // getting the second
    var second=date.getSeconds();
    //setting the AM or PM
    var ampm=(date.getHours())<12?'AM':'PM'

    //convert military time to standard time
    if(hours<0){
        hours=hours* -1;
    }
    else if(hours==00){
        hours=12;
    }
    else{
        hours=hours;
    }

    h2.textContent=addZero(hours)+":"+addZero(minutes)+":"+addZero(second)+""+ampm;
    
},1000);

/**Function to get hour, min, second, AM or PM
 * addZero,Set alarm time and sound, clear alarm
 */

//addZero function
 function addZero(time){
    return(time<10)?"0"+time:time;
 }

 //hours function
 function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

 // minutes function
 function minMenu(){
    var select=document.querySelector("#alarmmin");
    var min=59;
    for(var i=0;i<=min;i++){
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
 }
minMenu();


//second Menu

function secMenu(){
    var select = document.querySelector("#alarmsec")
    var sec=59;
    for(var i=0;i<=sec;i++){
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
}
secMenu();
function alarmSet(){
    var hr=document.querySelector('#alarmhrs');

    var min=document.querySelector('#alarmmin');
    var sec=document.querySelector('#alarmsec');
    var ap=document.querySelector('#ampm');
    var selectedHr=hr.options[hr.selectedIndex].value;
    var selectedMin=min.options[min.selectedIndex].value;
    var selectedSec=sec.options[sec.selectedIndex].value;
    var selectedAP=ap.options[ap.selectedIndex].value;
    var alarmTime= addZero(selectedHr)+":"+addZero(selectedMin)+":"+addZero(selectedSec)+selectedAP;
    // console.log('alarmTime:'+alarmTime);
    hr.disabled=true;
    min.disabled=true;
    sec.disabled=true;
    ap.disabled=true;


    // when alarm time is equal to current time
    var h2=document.querySelector("#clock");
    
    /**function to calculate the current time then compare
     * it to the alarm time and play a sound when they are equal
     */
    setInterval(function(){
        var date=new Date();
        var hours=(12-(date.getHours()));
        var minutes=date.getMinutes();
        var second=date.getSeconds();
        var ampm=(date.getHours())<12?'AM':'PM'
    
        //convert military time to standard time
        if(hours<0){
            hours=hours* -1;
        }
        else if(hours==0){
            hours=12;
        }
        else{
            hours=hours;
        }
        var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(second) + "" + ampm;
	

	if (alarmTime == currentTime) {
		sound.play();
		} 
        
        
    },1000);
}
  
function alarmClear(){
    
    document.querySelector("#alarmhrs").disabled=false;
    document.querySelector("#alarmmin").disabled=false;
    document.querySelector("#alarmsec").disabled=false;
    document.querySelector("#ampm").disabled=false;
    sound.pause();
}
