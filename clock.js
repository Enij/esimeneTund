window.onload = function(){

  var clock = document.getElementById('clock');

  writeDate(); //Selleks, et ei oleks näha esialgset 0:0:0, instant clock

  //window.setInterval(writeDate, 500);
  window.setInterval(function(){
    writeDate();
  }, 500);
};

function writeDate(){
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

  //setTimeout(writeDate, 1000);
}

function addZeroBefore(number){
  if(number >= 0 && number < 10){
    number = '0' + number;
  }
  return number;
}
