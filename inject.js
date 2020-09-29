//
// Main elements
//
var bg = document.getElementById('viewport'),
       footer = document.getElementById('fbar'),
       fsr = document.getElementById('fsr'),
       fsl = document.getElementById('fsl'),
       lHeader = document.getElementById('hptl'),
       searchBar = document.getElementsByClassName('RNNXgb'),
       searchBox = document.getElementsByClassName('sfbg'),
       searchList = document.getElementsByClassName('aajZCb'),
       promo = document.getElementById('prm'),
       logo = document.getElementById('hplogo');
// Background
bg.style.background = "#3d5f3a";
document.body.style.background = "#3d5f3a !important";
// Searchbox
searchBox[0].style.background = "none";
searchBar[0].style.backgroundColor = "#cfc3ab";
searchBar[0].style.border = "1px solid #593a0e";
searchList[0].style.backgroundColor = "#cfc3ab";
// Promotion
promo.style.display = "none";
// Left-Header
lHeader.style.display ="none";
// Footer
footer.style.background = "#3d5f3a";
footer.style.border = "none";
fsl.style.display = "none";
fsr.style.display = "none";
// Buttons
var buttons = document.getElementsByClassName('FPdoLc tfB0Bf');
buttons[0].style.display = "none";
// Font color
var topText = document.querySelectorAll('[class="gb_g"]');
//var footerText = document.querySelectorAll('[class="Fx4vi"]');
topText.forEach(e => e.style.color = "#cfc3ab");
//footerText.forEach(e => e.style.color = "#62466b");
// Google Logo
logo.style.filter = "sepia(60%)";

// Side nav
const iconstyle = {
    userSelect : 'none',
    float: 'left',
    color: '#cfc3ab',
    font: '20px Lato, sans-serif',
    paddingLeft: '30px'
};
var hamburgerIcon = document.createElement('div');
hamburgerIcon.innerHTML = '☰';
Object.assign(hamburgerIcon.style, iconstyle);
// Insert hamburger icon to open left hand menu
lHeader.parentNode.insertBefore(hamburgerIcon, lHeader);

//
// Left-hand menu
//

// CSS styles
const leftnav = {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '3',
    top: '0',
    left: '0',
    backgroundColor: '#7d6831',
    overflowX: 'hidden',
    transition: '0.5s'
};
const exitbtn = {
    userSelect : 'none',
    position: 'absolute',
    color: 'coal',
    top: '0',
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px'
};
const links = {
    padding: '4px 4px 4px 20px',
    textDecoration: 'none',
    fontSize: '20px',
    whiteSpace: 'nowrap',
    color: '#cfc3ab',
    display: 'block',
    transition: '0.3s'
};
const heading = {
    whiteSpace: 'nowrap',
    padding: '4px 4px 4px 20px',
    letterSpacing: '2px',
    color: 'white'
};
const screenborder = {
    border: '1px solid #cfc3ab',
    margin: '10px'
};

// Nav menu
var leftNav = document.createElement('div');
Object.assign(leftNav.style, leftnav);
// Exit button
var exitBtn = document.createElement('div');
exitBtn.innerHTML = "&times";
Object.assign(exitBtn.style, exitbtn);
// Links
var home = document.createElement('a');
home.innerHTML = "Canvas";
home.href = "https://canvas.ucdavis.edu/";
home.target = '_blank';
Object.assign(home.style, links);

var sBuilder = document.createElement('a');
sBuilder.innerHTML = "Schedule Builder";
sBuilder.href = "https://my.ucdavis.edu/schedulebuilder/";
sBuilder.target = '_blank';
Object.assign(sBuilder.style, links);

var oasis = document.createElement('a');
oasis.innerHTML = "OASIS";
oasis.href = "https://oasis.ucdavis.edu/";
oasis.target = '_blank';
Object.assign(oasis.style, links);

var mybill = document.createElement('a');
mybill.innerHTML = "MyBill";
mybill.href = "https://mybill.ucdavis.edu/";
mybill.target = '_blank';
Object.assign(mybill.style, links);

var cw = document.createElement('a');
cw.innerHTML = "CampusWire";
cw.href = "https://campuswire.com/c/GF1D4C1BB/feed/8";
cw.target = '_blank';
Object.assign(cw.style, links);

//
// Header
//
// Top Text
var upnext = document.createElement('h2');
upnext.innerText = "mama mia"
Object.assign(upnext.style, heading);
upnext.style.color = "#cfc3ab";
upnext.style.marginTop = "7px";

// Events show here as unordered list
var thisEvent = document.createElement('ul');
thisEvent.id = "events-upcoming";
Object.assign(thisEvent.style, heading);
thisEvent.style.listStyleType = "none";
thisEvent.style.margin = "0";
thisEvent.style.padding = "0";

// countdown timer till next event
var timer = document.createElement('h2');
Object.assign(timer.style, heading);
timer.style.display = "none"; // WIP
// For Clock
window.onload = function() {
    clock();
    function clock(){
        var time = new Date(),
        hrs = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();
        // convert to 12-hour format
        if (hrs > 12) {
            hrs -= 12;
        }
        if (hrs == 0) {
            hrs = 12;
        }
        timer.innerHTML = hrs + ':' + min + ':' + sec;
        setTimeout(clock, 1000);
    }
}

// Nav decoration
var screen = document.createElement('div');
screen.appendChild(thisEvent);
screen.appendChild(timer);
Object.assign(screen.style, screenborder);

//
// Injecting into doc
//
leftNav.appendChild(exitBtn);
leftNav.appendChild(upnext);
leftNav.appendChild(screen);
leftNav.appendChild(home);
leftNav.appendChild(sBuilder);
leftNav.appendChild(oasis);
leftNav.appendChild(mybill);
leftNav.appendChild(cw);
document.body.appendChild(leftNav);

// Nav menu open/close functionality
function navOpen() {
    leftNav.style.width = "35vw";
    checkSchedule();
}
function navClose() {
    leftNav.style.width = "0";
}
hamburgerIcon.addEventListener("click", navOpen);
exitBtn.addEventListener("click", navClose);


// // Client ID and API key from the Developer Console
// var CLIENT_ID = '240410264606-lsql0c8ndorliu8mc0t9jotpavccckvj.apps.googleusercontent.com';
// var API_KEY = 'AIzaSyBUWzapZhq9rAxU4PK1OWd54gFiMvnUbKA';


// After calendar data is fetched, check if unordered list is populated/empty
// var test = document.createElement('li');
// test.innerHTML = "item";
// Object.assign(test.style, heading);
// test.href = "zoom.com";
// $("#events-upcoming").append(test);
function checkSchedule() {
    if ($('#events-upcoming li').length == 0) {
        upnext.innerHTML = "No Events!";
        console.log("work");
    }else{
        upnext.innerHTML = "Up Next:";
        console.log("fail");
    }
}
