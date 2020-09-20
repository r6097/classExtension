//
// Main elements
//
var bg = document.getElementById('viewport'),
       footer = document.getElementById('fbar'),
       lHeader = document.getElementById('hptl'),
       searchBar = document.getElementsByClassName('RNNXgb'),
       searchBox = document.getElementsByClassName('sfbg'),
       promo = document.getElementById('prm'),
       logo = document.getElementById('hplogo');
// Background
bg.style.background = "#2d2327";
// Searchbox
searchBox[0].style.background = "none";
searchBar[0].style.backgroundColor = "lightyellow";
// Promotion
promo.style.display = "none";
// Left-Header
lHeader.style.display ="none";
// Footer
footer.style.display = "none";
// Buttons
var buttons = document.getElementsByClassName('FPdoLc tfB0Bf');
buttons[0].style.display = "none";
// Font color
var topText = document.querySelectorAll('[class="gb_g"]');
var footerText = document.querySelectorAll('[class="Fx4vi"]');
topText.forEach(e => e.style.color = "#818181");
footerText.forEach(e => e.style.color = "#62466b");
// Google Logo
logo.style.image = "grayscale(60%)";

// Side nav
const iconstyle = {
    userSelect : 'none',
    color: '#818181',
    font: '20px Lato, sans-serif',
    paddingLeft: '20px'
};
var hamburgerIcon = document.createElement('span');
hamburgerIcon.innerHTML = '☰';
Object.assign(hamburgerIcon.style, iconstyle);
// insert hamburger icon
lHeader.parentNode.insertBefore(hamburgerIcon, lHeader);

//
// left-hand menu
//

// styles
const leftnav = {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px'
};
const exitbtn = {
    userSelect : 'none',
    position: 'absolute',
    color: '#818181',
    top: '0',
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px'
};
const links = {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    whiteSpace: 'nowrap',
    color: '#818181',
    display: 'block',
    transition: '0.3s'
};

// nav menu
var leftNav = document.createElement('div');
Object.assign(leftNav.style, leftnav);
// exit button
var exitBtn = document.createElement('div');
exitBtn.innerHTML = "&times";
Object.assign(exitBtn.style, exitbtn);
// links
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

// insert items
leftNav.appendChild(exitBtn);
leftNav.appendChild(home);
leftNav.appendChild(sBuilder);
leftNav.appendChild(oasis);
document.body.appendChild(leftNav);


// Opening/Closing navbar
function navOpen() {
    leftNav.style.width = "35vw";
}
function navClose() {
    leftNav.style.width = "0";
}
hamburgerIcon.addEventListener("click", navOpen);
exitBtn.addEventListener("click", navClose);



