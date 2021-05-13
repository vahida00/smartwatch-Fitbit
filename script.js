var watch=document.getElementById('watch1');
var color=document.querySelectorAll('.colour');
var bgPath;
color.forEach(colorItem=>{
   colorItem.addEventListener('click',function(){
      var selectedColor=colorItem.getAttribute('data-value');
      console.log('selected color is '+selectedColor);
      switch(selectedColor){
         case 'red':
            watch.src="assests/red.png"
            break;
         case 'blue':
            watch.src="assests/blue.png"
            break;
         case 'purple':
            watch.src="assests/purple.png"
            break;
         case 'pink':
            watch.src="assests/pink.png"
            break;
         default:{
            watch.src="assests/black.png"
         }
      }
   })
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