console.log(document.getElementsByClassName("countdown").length!=0);
/*Para el conuntdown*/ 
if(document.getElementsByClassName(".countdown")){
  let countDownDate = new Date("Nov 10, 2020 15:37:25").getTime();
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
   let expired= document.getElementById('count');
   expired.classList.add('count_hidden');
   let titulo= document.getElementById('tit');
   titulo.innerHTML+="<p>La pelicula ya fue estrenada</p>";
   
  }
}, 1000);

}

//para las flechas del contador
let element = document.getElementById('sl');
let elementStyle = window.getComputedStyle(element);
let elementMargin = elementStyle.getPropertyValue('animation');
console.log(elementMargin);