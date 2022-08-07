var elem = document.documentElement;
var fullscreen = false
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    fullscreen = true
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    fullscreen = true
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    fullscreen = true
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    fullscreen = false
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    fullscreen = false
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    fullscreen = false
  }
}

/** FORM */
let initialTime = 0;
let start = false;
/** TIMER **/
let time = 600;
let stop = true;

const countdownElement = document.getElementById("countdown");

function saveInfo() {
    document.getElementById('music').innerHTML = 
    '<iframe id="music-url" width="1" height="1" style="opacity:0" src="https://www.youtube.com/embed/M5QY2_8704o?playlist=M5QY2_8704o&loop=1" allow="autoplay"></iframe>'
    stop = false
    controlCountDown()
    const event = document.getElementById("input-event").value;
    const title = document.getElementById("input-talk-name").value; 
    document.getElementById('event-name').innerHTML = event;
    document.getElementById('current-talk').innerHTML = title;
    const mins = parseInt(document.getElementById('form-min').value);
    const secs = parseInt(document.getElementById('form-sec').value);
    if (event == "" || title == "" || document.getElementById('form-min').value == '' || document.getElementById('form-sec').value == '') {
      alert('You need to fill all the fields!');
  }
  else {
      initialTime = mins*60 + secs;
      form.style.display = "none";
      timer.style.display = "flex";
      time = initialTime
  
      // Initializing the counter
      let minutes = Math.floor(time/ 60);
      let seconds = time % 60;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      countdownElement.innerHTML = `${minutes}:${seconds}`;
      openFullscreen();
  }
    
}


document.getElementById('timer-container').addEventListener("dblclick", () =>{
  if( fullscreen){
    closeFullscreen()
  }
  else{
    openFullscreen()
  }
}); 





// Control function
function controlCountDown() {
    stop = !stop;
    if(!stop) {
        document.getElementById('music-url').src += "&autoplay=1";
        document.getElementById("play-stop-icon").className = "fa fa-pause";
    }
    else {
        document.getElementById('music').innerHTML = 
          '<iframe id="music-url" width="1" height="1" style="opacity:0" src="https://www.youtube.com/embed/M5QY2_8704o?playlist=M5QY2_8704o&loop=1" allow="autoplay"></iframe>'
        document.getElementById("play-stop-icon").className = "fas fa-play";
    }
}

// Reset function 
function resetCountDown() {
    time = initialTime;
    document.getElementById('music').innerHTML = 
    '<iframe id="music-url" width="1" height="1" style="opacity:0" src="https://www.youtube.com/embed/M5QY2_8704o?playlist=M5QY2_8704o&loop=1&autoplay=1" allow="autoplay"></iframe>'
    
    stop = false
    controlCountDown()
    let minutes = Math.floor(time/ 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;
}

setInterval(PlayCountDown,1000);

function PlayCountDown() {
    if(!stop) {
        let minutes = Math.floor(time/ 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if ( time > 0) {
            time--;
        }
        else{
            document.getElementById('music').innerHTML = ''
            stop = false
            controlCountDown()
        }
        countdownElement.innerHTML = `${minutes}:${seconds}`;
    }
}

/** BACK TO FORM */
var form = document.getElementById("form-container");
var timer = document.getElementById("timer-container");
function goToForm() {
    resetCountDown();
    stop = true;
    controlCountDown();
    timer.style.display ="none";
    form.style.display = "flex";
    closeFullscreen()
    document.getElementById('music').innerHTML = ''
}


function checkMinutes() {
  if(parseInt(document.getElementById('form-min').value) <0) {
      document.getElementById('form-min').value = 0;
  }
  if(parseInt(document.getElementById('form-min').value) > 59) {
      document.getElementById('form-min').value = 59;
  }
}

function checkSeconds() {
  if(parseInt(document.getElementById('form-sec').value) <0) {
      document.getElementById('form-sec').value = 0;
  }
  if(parseInt(document.getElementById('form-sec').value) > 59) {
      document.getElementById('form-sec').value = 59;
  }
}

