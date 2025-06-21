console.log('connected.');
function  timer(){
    const a = document.querySelector('.js-hour');
    const b = document.querySelector('.js-mins');
    const c = document.querySelector('.js-sec');

    let hour = parseInt(a.value) || 0;
    let mins = parseInt(b.value) || 0;
    let seconds  = parseInt(c.value) || 0;
    let total;

    let hr = hour*60*60;
    let sec = mins*60;
    let count = 0;

    total = hr + sec + seconds;
    let totalCalc = total;

    let intervalId = setInterval(function(){
        totalCalc--;
         let seconds1 =  totalCalc;
    let hours1 = Math.floor(totalCalc / 3600);
    let remaining1 = seconds1 % 3600;
    let mins1 = Math.floor(remaining1/60);
    let sec1 = remaining1%60;
    let resultTime = `${hours1} hours ${mins1} minutes ${sec1} seconds`;
    document.querySelector('.result').innerHTML = resultTime;
        if(totalCalc<=0){
        document.querySelector('.result').innerHTML= 'Times up!';
        clearInterval(intervalId);
    }
}
    ,1000);
}
