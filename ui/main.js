var n;
var i=[];

function startSlideShow1(n){
    i[n] = setInterval(changeImage + n ,2000);
}

function startSlideShow(){
  i[1] = setInterval(changeImage1,2000);
  i[2] = setInterval(changeImage2,1900);
  i[3] = setInterval(changeImage3,1880);
  i[4] = setInterval(changeImage4,1920);
  i[5] = setInterval(changeImage5,1960);
}

function changeImage1(){
var imageSrc=document.getElementById("slideShow1").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 9){
	     changeImg=0;
	 }
var newImage= "/ui/school/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow1").setAttribute("src",newImage);
}

function changeImage2(){
var imageSrc=document.getElementById("slideShow2").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
var newImage= "/ui/leadership/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow2").setAttribute("src",newImage);
}

function changeImage3(){
var imageSrc=document.getElementById("slideShow3").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
var newImage= "/ui/sports/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow3").setAttribute("src",newImage);
}

function changeImage4(){
var imageSrc=document.getElementById("slideShow4").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 10){
	     changeImg=0;
	 }
var newImage= "/ui/college/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow4").setAttribute("src",newImage);
}

function changeImage5(){
var imageSrc=document.getElementById("slideShow5").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
var newImage= "/ui/home/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow5").setAttribute("src",newImage);
}

function stop(n){
clearInterval(i[n]);    
}