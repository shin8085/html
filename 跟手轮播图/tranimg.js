var imgul=document.getElementsByClassName("imgul")[0];
var imgli=document.getElementsByClassName("imgli");
var tranimg=document.getElementsByClassName("tranimg")[0];

for(var i=0;i<imgli.length;i++)
    imgli[i].style.width=window.innerWidth+"px";
imgul.style.width=imgli.length*window.innerWidth+"px";
//point
var point=document.getElementsByClassName("point")[0];
for(var i=0;i<imgli.length;i++){
    var lipoint=document.createElement("li");
    point.appendChild(lipoint);
    lipoint.classList.add("lipoint");
}
document.getElementsByClassName("lipoint")[0].classList.add("active");

var state={
    startx:0,
    endx:0,
    nowx:0,
    index:0
}
function judgemove(){
    var deltaX=state.endx-state.startx;
    if(deltaX>=window.innerWidth*2/5){
        //上一张
        document.getElementsByClassName("lipoint")[state.index].classList.remove("active");
        state.index--;
        if(state.index<0)
            state.index=0;
        _reset();
    }
    else if(deltaX<=-window.innerWidth*2/5){
        //下一张
        document.getElementsByClassName("lipoint")[state.index].classList.remove("active");
        state.index++;
        if(state.index>imgli.length-1)
            state.index=imgli.length-1;
        _reset();
    }
    else{
        //不动
        _reset();
    }
}
function _reset(){
    imgul.style.transition="all .3s"; //增加过度
    imgul.style.marginLeft=-state.index*window.innerWidth+"px";
}
//触摸开始
tranimg.addEventListener("touchstart",function(e){
    imgul.style.transition="none"; //去除过度
    state.startx=e.targetTouches[0].clientX;
})
tranimg.addEventListener("touchmove",function(e){
    state.nowx=e.targetTouches[0].clientX;
    if(state.index==0&&state.nowx-state.startx>0||state.index==imgli.length-1&&state.nowx-state.startx<0)
        imgul.style.marginLeft=-state.index*window.innerWidth+(state.nowx-state.startx)*0.5+"px";
    else
        imgul.style.marginLeft=-state.index*window.innerWidth+state.nowx-state.startx+"px";
})
tranimg.addEventListener("touchend",function(e){
    state.endx=e.changedTouches[0].clientX;
    judgemove();
    document.getElementsByClassName("lipoint")[state.index].classList.add("active");
})