var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;
var colorcito = "#FAA";

//while(l < lineas)
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf  = 10 * (l + 1);
    xi = 300 - yi;
    yf = 300 - xf;
    dibujarLinea(colorcito,0,yi,xf,300);
    dibujarLinea(colorcito,yi,0,300,xf);
    dibujarLinea(colorcito,0,xf,xi,0);
    dibujarLinea(colorcito,yi,300,300,yf);
    console.log("Linea " + l);
    //l++;
}

dibujarLinea(colorcito, 0, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 1,1,299,1);
dibujarLinea(colorcito, 299,1,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}