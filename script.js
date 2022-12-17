const hamburger = document.getElementsByClassName("hamburger")[0];
const hamburger_bar = document.getElementsByClassName("hamburger-bar")[0];
const nav_bar = document.querySelector(".nav-bar");
const nav_container = document.querySelector(".nav-container");
const special_nav_item_right = document.querySelector(".special-nav-item .right");
var click1 = 1;

hamburger.addEventListener("click", function (){
    if(click1){
        hamburger_bar.style.visibility = "visible";
        if(document.body.clientWidth <= 1024){
            nav_container.style.height = "420px";
        }
        click1 = 0;
    }
    else{
        hamburger_bar.style.visibility = "hidden";
        if(document.body.clientWidth){
            nav_container.style.height = "0px";
        }
        click1 = 1;
    }
});


const special_nav_item = document.getElementsByClassName("special-nav-item")[0];
const consult_bar = document.getElementsByClassName("consult-bar")[0];
var click2 = 1;

special_nav_item.addEventListener("click", function (){
    if(click2){
        special_nav_item_right.style.transform = "rotate(90deg)";
        consult_bar.style.visibility = "visible";
        click2 = 0;
        console.log("if run");
    }
    else{
        special_nav_item_right.style.transform = "rotate(0deg)";
        consult_bar.style.visibility = "hidden";
        click2 = 1;
        console.log("else run");
    }
});




// slider in #header
const slide = document.querySelector(".slide");
const indicator = document.getElementsByClassName("indicator");

var percent = -1;
console.log(slide);
console.log(indicator);

setInterval(() => {
    
    if(percent == 0){
        indicator[0].classList = "indicator active-indicator";
        indicator[1].classList = "indicator";
        indicator[2].classList = "indicator";
        indicator[3].classList = "indicator";
        indicator[4].classList = "indicator";
    }
    if(percent == -1){
        indicator[0].classList = "indicator";
        indicator[1].classList = "indicator active-indicator";
        indicator[2].classList = "indicator";
        indicator[3].classList = "indicator";
        indicator[4].classList = "indicator";
    }
    if(percent == -2){
        indicator[0].classList = "indicator";
        indicator[1].classList = "indicator";
        indicator[2].classList = "indicator active-indicator";
        indicator[3].classList = "indicator";
        indicator[4].classList = "indicator";
    }
    if(percent == -3){
        indicator[0].classList = "indicator";
        indicator[1].classList = "indicator";
        indicator[2].classList = "indicator";
        indicator[3].classList = "indicator active-indicator";
        indicator[4].classList = "indicator";
    }
    if(percent == -4){
        indicator[0].classList = "indicator";
        indicator[1].classList = "indicator";
        indicator[2].classList = "indicator";
        indicator[3].classList = "indicator";
        indicator[4].classList = "indicator active-indicator";
    }
    
    slide.style.left = (percent * 100) + "%";
    
    percent--;
    
    if(percent < -4){
        console.log(percent);
        percent = 0;
    }
    
}, 2000);