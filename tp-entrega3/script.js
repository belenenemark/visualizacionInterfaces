console.log(document.getElementsByClassName("countdown").length!=0);
/*Para el conuntdown*/ 
if(document.getElementsByClassName(".countdown")){
  let countDownDate = new Date("Oct 28, 2021 15:37:25").getTime();
  let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let thisd=document.getElementById("days");
    thisd.innerHTML=days;
    let thish=document.getElementById("hours");
    thish.innerHTML=hours;
    let thism=document.getElementById("minutes");
    thism.innerHTML=minutes;
    let thiss= document.getElementById("seconds")
   thiss.innerHTML=seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);

}
