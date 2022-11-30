
window.onload = function(){
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        get_random_image();
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        minutes = "00";
        tens = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;
        if(tens<9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML =  tens;
        }
        if(tens>99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 00;
            appendSeconds.innerHTML = "0"+0;
        }
        if(minutes > 9){
            appendMinutes.innerHTML=minutes;
        }
        if(minutes % 3 == 0 && minutes != 0 && seconds == 0 && tens == 0){
            get_random_image();
        }
        console.log(minutes);
    }

    

}
// Get all the images
image_array = [
  'jamal.jpg',
  'doublepunch.jpg',
  'think.png',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png'
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}

