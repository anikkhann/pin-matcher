 //pinclick + 4 random digit appear
 const generatePin=document.getElementById("generatePin");
 generatePin.addEventListener("click", function(){
     //math.round()will generate a floating point number in the range [0, 1) (1 is excluded from the range).
     //Multiplying by 9000 results in a range of [0, 9000).
     //Adding 1000 results in a range of [1000, 10000).
     //Flooring chops off the decimal value to give you an integer.it does not round.
     var value = Math.floor(1000 + Math.random() * 9000);
    
    document.getElementById("textBox").value=value;

 })
 //function for number button
 function myClick(numbers)
 {
     document.getElementById("textBoxTwo").value+=numbers;//calculator button will show in the text box.
 }
 //function for left arrow button
 function myClickTwo(leftArrow) //Extra Work for 60 marks
 {
   document.getElementById("textBoxTwo").value=document.getElementById("textBoxTwo").value.slice(0, -1);
   
 }
 //function for clear button
 function myClickThree(clear)//extra work for 60 marks
 {
     document.getElementById("textBoxTwo").value='';
 }

 //function for summit button click and notification for matching number or miss match number
 const submitButton=document.getElementById("submitButton");
 submitButton.addEventListener("click", function(){
     submitButton.style.display="none";
     // const notifyOne=document.getElementById("notifyOne");
     // notifyOne.style.display="block";                        //initially hide the notifications. 
     // const notifyTwo=document.getElementById("notifyTwo");
     // notifyTwo.style.display="block";

     
      const textBox=document.getElementById("textBox").value;
      const textBoxTwo=document.getElementById("textBoxTwo").value;
      if(textBox==textBoxTwo)
      {
         const notifyTwo=document.getElementById("notifyTwo");      //if firstbox value == second box then notification two will appear
         notifyTwo.style.display="block";  
          
      }
      //if(textbox!==textBoxTwo)
      else
      {
          
         const notifyOne=document.getElementById("notifyOne");// else notification one will apper
         notifyOne.style.display="block";  
         // return document.getElementById("notifyTwo").innerText;
     
      }

 })

