var BarOne=document.getElementById("barone");
var BarTwo=document.getElementById("bartwo");

//bartwo底部到网页顶部的距离
var foottotop=BarTwo.offsetHeight+BarTwo.offsetTop; 

function show(){
    BarOne.classList.add("active");    
}

function hide(){
    BarOne.classList.remove("active");
}

window.addEventListener("scroll",function(){
    if(window.scrollY>=foottotop){
        show();
    }
    else hide();
})