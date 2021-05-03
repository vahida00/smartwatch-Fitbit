//  Selected the different color buttons
 var blackWatch=document.getElementById('black');
 var redWatch=document.getElementById('red');
 var blueWatch=document.getElementById('blue');
 var purpleWatch=document.getElementById('purple');
 var pinkWatch=document.getElementById('pink');

// Select the Watch Image which is going to be updated
 var watch=document.getElementById('watch1');

//  Update the watch according the color button
 blackWatch.addEventListener('click',function(){
    var bgPath="/assests/black.png"
    watch.src=bgPath;
 })
 redWatch.addEventListener('click',function(){
    var bgPath="/assests/red.png"
    watch.src=bgPath;
 })
 blueWatch.addEventListener('click',function(){
    var bgPath="/assests/blue.png"
    watch.src=bgPath;
 })
 purpleWatch.addEventListener('click',function(){
    var bgPath="/assests/purple.png"
    watch.src=bgPath;
 })
 pinkWatch.addEventListener('click',function(){
    var bgPath="/assests/pink.png"
    watch.src=bgPath;
 })

//  CLOCK
function clock(){
   const fullDate=new Date();
   var hours=fullDate.getHours();
   var mins=fullDate.getMinutes();
   var secs=fullDate.getSeconds();

   document.getElementById('hour').innerHTML=hours;
   document.getElementById('minute').innerHTML=":"+mins;
   document.getElementById('second').innerHTML=":"+secs;
   if(hours<10){
       hours="0"+hours;
   }
   if(mins<10){
       mins="0"+mins;
   }
   if(secs<10){
       secs="0"+secs;
   }
}
setInterval(clock,100);

// Features
var featureOne=document.getElementById('feature-one');
var featureTwo=document.getElementById('feature-two');
var time=document.getElementById('time');
var heartRate=document.getElementById('heartrate');
time.addEventListener('click',function(){
   featureOne.classList.remove('hide');
   featureTwo.classList.add('hide');
})
heartRate.addEventListener('click',function(){
   featureTwo.classList.remove('hide');
    featureOne.classList.add('hide');
})