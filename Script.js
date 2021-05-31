document.getElementById("toggleID").addEventListener('mouseover', function () {
    document.getElementById("mySidebar").style.left = "5px";
});

document.getElementById("mySidebar").addEventListener('mouseleave', function () {
    document.getElementById("mySidebar").style.left = "-500px";
});

document.getElementById("toggleID").addEventListener('click', function () {
    document.getElementById("mySidebar").style.left = "-500px";
});


function closeNav() {
    document.getElementById("mySidebar").style.left = "-500px";
}

function silverTxt() {
    document.getElementById("mysilverBG").style.display = "block";
    document.getElementById("myblueBG").style.display = "none";
    document.getElementById("myorangeBG").style.display = "none";
    document.getElementById("myredBG").style.display = "none";
    document.getElementById("mygreenBG").style.display = "none";
}

function blueTxt() {
    document.getElementById("myblueBG").style.display = "block";
    document.getElementById("mysilverBG").style.display = "none";
    document.getElementById("myorangeBG").style.display = "none";
    document.getElementById("myredBG").style.display = "none";
    document.getElementById("mygreenBG").style.display = "none";
}

function orangeTxt() {
    document.getElementById("myorangeBG").style.display = "block";
    document.getElementById("mysilverBG").style.display = "none";
    document.getElementById("myblueBG").style.display = "none";
    document.getElementById("myredBG").style.display = "none";
    document.getElementById("mygreenBG").style.display = "none";
}

function redTxt() {
    document.getElementById("myredBG").style.display = "block";
    document.getElementById("mysilverBG").style.display = "none";
    document.getElementById("myblueBG").style.display = "none";
    document.getElementById("myorangeBG").style.display = "none";
    document.getElementById("mygreenBG").style.display = "none";
}

function greenTxt() {
    document.getElementById("mygreenBG").style.display = "block";
    document.getElementById("mysilverBG").style.display = "none";
    document.getElementById("myblueBG").style.display = "none";
    document.getElementById("myorangeBG").style.display = "none";
    document.getElementById("myredBG").style.display = "none";
}

function Silver() {
    document.bgColor = "Silver";
    closeNav()
    silverTxt()
}

function Blue() {
    document.bgColor = "Cornflowerblue";
    closeNav()
    blueTxt()
}

function Orange() {
    document.bgColor = "Orange";
    closeNav()
    orangeTxt()
}

function Red() {
    document.bgColor = "Red";
    closeNav()
    redTxt()
}

function Green() {
    document.bgColor = "Green";
    closeNav()
    greenTxt()
}
