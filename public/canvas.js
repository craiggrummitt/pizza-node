//grid width and height
var bw = 400;
var bh = 400;

//padding around grid
var p = 10;

//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;
var ss = 40;

var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo('body');

var context = canvas.get(0).getContext("2d");

function drawBoard(){
    for (var x = 0; x <= bw; x += ss) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += ss) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    
    for (var x = 0; x < bw; x += ss) {
        for (var y = 0; y < bh; y += ss) {
            context.fillStyle= '#FFFFFF'; // '#' + Math.floor(Math.random()*16777215).toString(16);
            context.fillRect(0.5 + x + p, 0.5 + y + p, ss, ss);
        }  
    } 

    context.strokeStyle = "black";
    context.stroke();
}

function drawPizza(x,y,color) {
    // for demo purposes only: if there are no parameters, we'll draw a random pizza
    if (!x) {
        x = Math.floor((Math.random() * 10) + 1);
        y = Math.floor((Math.random() * 10) + 1);
        color = '#' + Math.floor(Math.random()*16777215).toString(16);
    } else {
        // Adjust x and y coordinates by 1 so that drawPizza(1,1,...) is the upper-left square
        x -= 1, y -= 1;
    }

    context.fillStyle = color;
    context.fillRect(p + 0.5 + x * ss, p + 0.5 + y * ss, ss, ss);
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();

// To clear the grid, just call drawBoard()