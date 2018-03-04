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
        if(marginRight==20)
        {
            marginLeft=0;
            marginRight=0;
        }
     }
     else
     {
     marginLeft=marginLeft+1;
     element2.style.marginLeft=marginLeft+'px';
     }
 }
 element2.onclick=function() {
     var interval= setInterval(moveRight,50);
 }
 
 //for counter code
 var button=document.getElementById('counter');
 var counter=0;
 button.click=function(){
     //make a request to the counter endpoint
     
     //capture the response and store it in a variable
     
     //render the variable in the correct span
     counter=counter+1;
     var span=document.getElementById('count');
     span.innerHTML=counter.toString();
     
 }