// WEBSITE LOAD
let LoadBox = document.getElementById('loading');
window.addEventListener('load',()=>{
    LoadBox.style.display = 'none';
});









// FAQ
function toggleAnswer(answerId) {
    var answer = document.getElementById("answer" + answerId);
    if(answer.style.display === "none"){
        answer.style.display = "block";
    }else{
        answer.style.display = "none";
    }
}




// RIGHT BTN NOT WORK IN PHONE
var myElement = document.getElementById('phone');
function handleRightClick(event) {
    event.preventDefault();
}myElement.addEventListener('contextmenu', handleRightClick);




// LOCK TIME
let display1 = document.getElementById('one');
let display2 = document.getElementById('two');

// HOME TIME
let homeTime = document.getElementById('home-time');

function times(){
requestAnimationFrame(times);

let time = new Date();

let day = time.getDay();
let month = time.getMonth();
let date = time.getDate();
let hour = time.getHours();
let minute = time.getMinutes();

// Weeks
switch(true){
    case day == 0:
        day = 'Sunday';
        break;
    case day == 1:
        day = 'Monday';
        break;
    case day == 2:
        day = 'Tuesday';
        break;
    case day == 3:
        day = 'Wednesday';
        break;
    case day == 4:
        day = 'Thursday';
        break;
    case day == 5:
        day = 'Friday';
        break;
    case day == 6:
        day = 'Saturday';
        break;
}
// Months
switch(true){
    case month == 0:
        month = 'Jan';
        break;
    case month == 1:
        month = 'Feb';
        break;
    case month == 2:
        month = 'Mar';
        break;
    case month == 3:
        month = 'Apr';
        break;
    case month == 4:
        month = 'May';
        break;
    case month == 5:
        month = 'Jun';
        break;        
    case month == 6:
        month = 'Jul';
        break;
    case month == 7:
        month = 'Aug';
        break;
    case month == 8:
        month = 'Sep';
        break;
    case month == 9:
        month = 'Oct';
        break;
    case month == 10:
        month = 'Nov';
        break;
    case month == 11:
        month = 'Dec';
        break;
}

    if(hour == 0){
        display1.innerHTML = day+', '+month+' '+date;
        display2.innerHTML = '0'+hour+':'+minute;
        homeTime.innerHTML = '0'+hour+':'+minute;
        if(minute == 1 || minute == 2|| minute == 3||minute == 4||minute == 5||minute == 6||minute == 7||minute == 8||minute == 9){
            display2.innerHTML = '0'+hour+':0'+minute;
            homeTime.innerHTML = '0'+hour+':0'+minute;
        }
        
    }else if(minute == 0 ||minute == 1 || minute == 2|| minute == 3||minute == 4||minute == 5||minute == 6||minute == 7||minute == 8||minute == 9){
        display1.innerHTML = day+', '+month+' '+date;
        display2.innerHTML = hour+':0'+minute;
        homeTime.innerHTML = hour+':0'+minute;
    }else{
        display1.innerHTML = day+', '+month+' '+date;
        display2.innerHTML = hour+':'+minute;
        homeTime.innerHTML = hour+':'+minute;
    }

    // Set Height (home-main-display)
    let homeTopBarHeight = document.getElementById('home-top-bar').clientHeight;
    let homeMainDisplaySetHeight = document.getElementById('home-main-display').style.cssText += `height:calc(100% - ${homeTopBarHeight}px) `
}requestAnimationFrame(times);


// Torch Box
let torchBtn = document.getElementById('torch-btn');
let torch = document.getElementById('torch').firstElementChild;

torchBtn.addEventListener('click',function(){
    if(torch.style.display == 'block'){
        torch.style.display = 'none';
    }else{
        torch.style.display = 'block';
    }
});




// go to password lock screen
let bottomSwip = document.getElementById('bottom-swip');
let border = document.getElementById('border');
let camBox = document.getElementById('cam-box');
let lockPad = document.getElementById('lock-pad');
let lockIconCam = document.querySelector('#icons #lock-icon');
let lockSvgPath = lockIconCam.querySelector('svg path');


bottomSwip.addEventListener('scroll',function(){
    border.style.cssText += 'scale: 1.5; bottom: 25%';
    lockIconCam.style.cssText += 'left : 10px;';
    camBox.style.cssText += 'width: 40%; left: 30%;';
    function a(){
        border.style.cssText += 'border: 2px solid transparent';
        lockPad.style.scale = '1';
    }setTimeout(a,100);

});





// set passord
let userPass = document.getElementById('user-pass');
let msgShow = document.getElementById('showMsg');
let setPass = document.getElementById('setPass');
// Pass Save String
setPass.addEventListener('click',function(){
    
    if(userPass.value.length <=5){
        msgShow.innerHTML = 'Password is less then 6';
        msgShow.style.color = '#c0392b';
    }
    else if(userPass.value.length >=7){
        msgShow.innerHTML = 'Password is grater then 6';
        msgShow.style.color = '#c0392b';
    }else{
        msgShow.innerHTML = 'Password was set';
        msgShow.style.color = '#27ae60';
    }
});

// Keys Pad Box
let keys = document.querySelectorAll('#key-box div span');
let passDot = document.getElementById('pass-dot').children;
let keyStr = '';
let enterPass = document.getElementById('enter-pass');
let extraSpace = document.getElementById('extra-space');

for(let key of keys){
    key.addEventListener('click',function(){
        keyStr += key.innerHTML;
        extraSpace.style.display = 'none';

        for(let keyDot of passDot){
            if(keyStr.length == 1){
                keyDot.parentElement.firstElementChild.style.cssText += 'background: #ffffff;';
            }else if(keyStr.length == 2){
                keyDot.parentElement.firstElementChild.nextElementSibling.style.cssText += 'background: #ffffff;';
            }else if(keyStr.length == 3){
                keyDot.parentElement.firstElementChild.nextElementSibling.nextElementSibling.style.cssText += 'background: #ffffff;';
            }else if(keyStr.length == 4){
                keyDot.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.cssText += 'background: #ffffff;';
            }else if(keyStr.length == 5){
                keyDot.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.cssText += 'background: #ffffff;';
            }else{

                
                keyDot.style.cssText += 'background: #ffffff;';
                if(keyStr == userPass.value && keyStr.length == 6){
                    enterPass.innerHTML = 'Correct Password';
                    enterPass.style.cssText += 'color: #27ae60; transform: translate(0px, 0px)';
                    lockSvgPath.style.cssText = 'fill: #27ae60;';
                    setTimeout(()=>{
                        lockPad.style.cssText += 'filter: blur(20px)';
                        camBox.style.cssText += 'width: 25%; left: 37.5%;'                    
                    },100);
                    setTimeout(()=>{
                        lockPad.style.display = 'none';
                        
                        let bottomSwipHome = document.getElementById('bottom-swip-home');
                        let border2 = document.getElementById('border2');
                        bottomSwipHome.style.cssText += 'display: block;';
                        border2.style.cssText += 'display: block';
                        
                    },500);
                }else{

                    if(keyStr.length <= 6){
                        enterPass.innerHTML = 'Wrong Password';
                        enterPass.style.cssText += 'color: red; transform : translate(10px, 0px)';
                        lockSvgPath.parentElement.style.cssText = 'transform : translate(10px, 0px)';
                        lockSvgPath.style.cssText = 'fill: red;';

                        setTimeout(()=>{
                            enterPass.style.cssText += 'color: red; transform : translate(-10px, 0px)';
                            lockSvgPath.parentElement.style.cssText = 'transform : translate(-10px, 0px)';
                            if(keyStr.length >= 6){
                                keys = '';
                                keyStr = '';
                            }
                            keyDot.style.cssText += 'background: none;';
                        },100);
                        setTimeout(()=>{
                            enterPass.style.cssText += 'color: red; transform : translate(10px, 0px)';
                            lockSvgPath.parentElement.style.cssText = 'transform : translate(10px, 0px)';
                        },200);
                        setTimeout(()=>{
                            enterPass.style.cssText += 'color: red; transform : translate(-10px, 0px)';
                            lockSvgPath.parentElement.style.cssText = 'transform : translate(-10px, 0px)';
                        },300);
                        setTimeout(()=>{
                            enterPass.style.cssText += 'color: red; transform : translate(0px, 0px)';
                            lockSvgPath.parentElement.style.cssText = 'transform : translate(0px, 0px)';
                        },400);
                    }
                }
            }
        }
    });
}

// cancel button to back lock screen
let cancel = document.getElementById('cancel');

cancel.addEventListener('click',()=>{
    extraSpace.style.display = 'block';

    border.style.cssText += 'scale: 0;';
    lockIconCam.style.cssText += 'left : -100%;';
    camBox.style.cssText += 'width: 25%; left:37.7%;';
    border.style.cssText += 'scale: 1; bottom: 5px';
    lockPad.style.scale = '0';

    function a(){
        border.style.cssText += 'border: 2px solid #ffffff';
    }setTimeout(a,200);

});

// After width 768 then Alert
let width = document.body.clientWidth;
if(width <= 768){
    alert('Password Is 000000');
}

















// |||||||||||||||||||||||
    // HOME SCREEN 
// ||||||||||||||||||||

// go to Home screen
let bottomSwipHome = document.getElementById('bottom-swip-home');
let border2 = document.getElementById('border2');
let lockSrc = document.getElementById('phone-inner');

// Main Home Screen
let homeScreen = document.getElementById('home-screen');
let homeScreenContent = document.getElementById('home-screen-content');

bottomSwipHome.addEventListener('scroll',function(){
    lockIconCam.style.cssText += 'left : -100%';
    border2.style.cssText += 'scale: 1.5; bottom: 25%';

    function a(){
        border2.style.cssText += 'border: 2px solid transparent';
        lockSrc.style.cssText += 'background: rgba(255, 255, 255, 0); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);';
    }setTimeout(a,100);
    function b(){
            lockSrc.style.display = 'none';
            homeScreen.style.display = 'block';
    }setTimeout(b,350);
    function c(){
        homeScreenContent.style.scale = '1';
    }setTimeout(c,400);

});






