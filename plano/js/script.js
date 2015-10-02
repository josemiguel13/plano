$(function()
{
    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 300);
    context.lineTo(650, 300);
    context.strokeStyle = "green";
    context.stroke();
    context.lineWidth = 4;
    context.stroke();

    // grafica 100101
    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(200, 200);
    context.lineTo(200, 300);
    context.lineTo(300, 300);
    context.lineTo(400, 300);
    context.lineTo(400, 200);
    context.lineTo(500, 200);
    context.lineTo(500, 300);
    context.lineTo(600, 300);
    context.lineTo(600, 200);
    context.lineTo(700, 200);
    context.strokeStyle = "red";
    context.stroke();
    context.lineWidth = 4;
    context.stroke();

    
    
    //Flecha...
    context.beginPath();
    context.moveTo(640, 290);
    context.lineTo(650, 300);
    context.lineTo(640, 310);
    context.lineTo(640, 290);
    context.lineWidth = 1;
    context.strokeStyle = "green";
    context.fillStyle = 'green';
    context.fill();
    context.stroke();
    context.font = "normal 20px Arial";
    context.fillStyle = "green"
    context.fillText("Amplitud", 60, 30);
    context.font = "normal 20px Arial";
    context.fillStyle = "green"
    context.fillText("Tiempo", 660, 300);
    context.font = "normal 20px Arial";
    context.fillStyle = "green"
    context.fillText("0", 80, 320);
    context.fillText("1", 80, 200);
});
