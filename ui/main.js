console.log('Loaded!');
//changing the content of the html element main-text
 var element=document.getElementById('main-text');
 element.innerHTML="bbye meet you u again";
 //moving the image with animation
 var element2=document.getElementById('madi');
 var marginLeft=0;
 var marginRight=0;
 function moveRight()
 {
     if(marginLeft>20)
     {
         marginRight=marginRight+1;
        element2.style.marginRight=marginRight+'px'; 
     }
     else{
     marginLeft=marginLeft+1;
     element2.style.marginLeft=marginLeft+'px';
     }
 }
 element2.onclick=function() {
     var interval= setInterval(moveRight,50);
 }