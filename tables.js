var element=document.getElementById("table")

var random_number = Math.floor( Math.random() * 100 + 1) 
var count=0;
 var myInter=setInterval(function()  {

    count++
    var my_result = "<h1>"+random_number+" x "+count +" = " +random_number*count+"</h1>"
    element.innerHTML = element.innerHTML + my_result;
    if(count===10){
        clearInterval(myInter)
    }
}, 1000); 



