var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
fabric.Image.fromURL('imagenDeAniversario.png', function(Img) {//colocou URLS em vez de URL, \image com i minusculo
    blockImageObject = Img;// img com I maiusculo

    blockImageObject.scaleToWidth(400);//AUMS HORA ESCREVEU IMAGE COM I MINUSCULO E OUTRA MAIUSCULO
    blockImageObject.scaleToHeight(400);
    blockImageObject.set({//escreveu ser em vez de set
    top:0,//colocou ";" em vez de ","
    left:80
    });
   canvas.add(blockImageObject);
    });
    
	
}

function playSound(){
	x.play();
}
