var mouseevent = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x,last_position_of_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseevent ="mousedown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent ="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent ="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_x =e.clientX-canvas.offsetLeft;
current_position_of_y =e.clientY-canvas.offsetTop; 

if(mouseevent=="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle="brown";
    ctx.lineWidth=4;

    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
ctx.style(circle)
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}