// https://www.youtube.com/watch?v=83L6B13ixQ0

const canvas = document.querySelector('#canvasTile');

// we want to setup width and geight via js file
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context
// we are passing methods and functions to variable
const ctx = canvas.getContext('2d');

// we can draw:
// - rectangles
// x, y , width and height
ctx.fillStyle = "rgba(255,0 ,0, 0.1)" // to change color of rectangle we need to use fillRect method. Styles will accepts rgb. rgba, hex and keyword values
ctx.fillRect(100, 100, 50, 50);
ctx.fillStyle = "rgba(255,120 ,120, 1)" // we need to proceed the rectangle with color we need
ctx.fillRect(200, 150, 50, 50);
ctx.fillStyle = "rgba(0,255 ,120, 1)"
ctx.fillRect(250, 250, 50, 50)


// - lines
ctx.beginPath(); //begins path
ctx.moveTo(50, 300) // specifies where we begin on x,y axis
ctx.lineTo(300, 100)
ctx.lineTo(400, 300) // We can extend the line to as many points as we want
ctx.strokeStyle = "#fa34a3" // changes color on stroke
ctx.stroke() // finishes the drawing of the line

// - arcs/circles
ctx.beginPath()
ctx.arc(500,500, 30, 0, Math.PI * 2, false);
ctx.strokeStyle ="blue"
ctx.stroke()

// Creating multiple circles
for( var i = 0; i < 50; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerWidth;
    var circleColor = "rgba(" + Math.random() * 250 + ","+ Math.random() * 250 + "," + Math.random() * 250 + "," + Math.random() + ")"
    ctx.beginPath()
    ctx.arc(x,y + i * -5, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = circleColor;
    ctx.stroke()
}

// - images
// - text
// - bezier curves
