var start=0;
var images=['1.jpg','2.jpg','3.png','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
var time=5000;



function changeImg(){
    document.slide.src=images[start];

    if(start<images.length-1){
        start++;
    }
    else{
        start=0;
    }

    setTimeout('changeImg()',time);
}

window.onload=changeImg;