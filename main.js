canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "magenta";
ctx.lineWidth = 1;
ctx.rect(150,143,430,200,);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(360,210,40,0,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.arc(470,210,40,0,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(305,240,40,0,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(415,237,40,0,2 * Math.PI );
ctx.stroke();