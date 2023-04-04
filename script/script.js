const launchDay = new Date().setHours(new Date().getHours() + 216)
let previousDate;
setInterval(()=>{
    const currentDay = new Date();
    let countDownDay = Math.ceil((launchDay-currentDay)/1000);
    flipAllCards(countDownDay);
    previousDate = countDownDay;
},250);

function flipAllCards(time){
    let seconds = time%60;
    let minutes = Math.floor(time/60)%60;
    let hours = Math.floor(time/3600)%24;
    let days = Math.floor(time/86400)%24;
    flip(document.querySelector(".days"),days);
    flip(document.querySelector(".hours"),hours);
    flip(document.querySelector(".minutes"),minutes);
    flip(document.querySelector(".seconds"),seconds);
}

function flip(timeFrame,timeCount){
    const upper = timeFrame.querySelector(".upper");
    let currentNumber = parseInt(upper.innerText);
    if(timeCount===currentNumber) return;

    const lower = timeFrame.querySelector(".lower");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    if(timeCount<10){
        upper.innerText = "0" + timeCount;
        lower.innerText = "0" + timeCount;
        topFlip.innerText = "0" + timeCount;
        bottomFlip.innerText = "0" + timeCount;
    }
    else{
        upper.innerText = timeCount;
        lower.innerText = timeCount;
        topFlip.innerText = timeCount;
        bottomFlip.innerText = timeCount;
    }

    topFlip.addEventListener("animationstart",e =>{
        if(timeCount<10){
            upper.innerText = "0"+ timeCount;
            topFlip.innerText = "0"+ timeCount;
        }
        else{
            upper.innerText = timeCount;
            topFlip.innerText = timeCount;
        }
    });

    topFlip.addEventListener("animationend",e=>{
        topFlip.remove();
    });

    bottomFlip.addEventListener("animationend",e=>{
        if(timeCount<10){
            lower.innerText ="0"+ timeCount;
            bottomFlip.innerText ="0"+ timeCount;
        }
        else{
            bottomFlip.innerText = timeCount;
        }
        bottomFlip.remove();
    });

    timeFrame.append(topFlip,bottomFlip);
}