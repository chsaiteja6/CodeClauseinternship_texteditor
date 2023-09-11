const textarea=document.getElementById("textarea");

function f1(e){
    let val=e.value;
    textarea.style.fontSize=val+"px";
}
function f2(e){
    if(textarea.style.fontWeight=="bold"){textarea.style.fontWeight="normal"}
    else textarea.style.fontWeight="bold";
}
function f3(e){
    if(textarea.style.fontStyle=="italic"){textarea.style.fontStyle="normal"}
    else textarea.style.fontStyle="italic";
}
function f4(e){
    if(textarea.style.textDecoration=="underline"){textarea.style.textDecoration="none"}
    else textarea.style.textDecoration="underline";
}
function f5(e){
    textarea.style.textAlign="left";
}
function f6(e){
    textarea.style.textAlign="center";
}
function f7(e){
    textarea.style.textAlign="right";
}
function f8(e){
    if(textarea.style.textTransform=="uppercase"){textarea.style.textTransform="lowercase"}
    else textarea.style.textTransform="uppercase";
}
function f9(e){
    textarea.style.fontWeight="normal";
    textarea.style.textAlign="left";
    textarea.style.textDecoration="none";
    textarea.style.fontStyle="normal";
    textarea.style.textTransform="capitalize";
}
function f10(e){
    textarea.style.color=e.value;
}