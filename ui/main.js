
alert('hello');
  
function startSlideShow(){
 setInterval(changeImage1,2000);
 setInterval(changeImage2,1800);
 setInterval(changeImage3,1600);
}

function changeImage1(){
var imageSrc=document.getElementById("slideShow1").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 10){
	     changeImg=0;
	 }
var newImage= "/ui/schoolImages/" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow1").setAttribute("src",newImage);
}

function changeImage2(){
var imageSrc=document.getElementById("slideShow2").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
var newImage= "/ui/l" + (Number(changeImg)+1) + ".jpg" ;
document.getElementById("slideShow2").setAttribute("src",newImage);
document.getElementById("simple").innerHTML=(newImage);
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

