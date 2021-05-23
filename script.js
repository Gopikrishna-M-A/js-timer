
var second =0;
var intervalID=0;

function start(){
   intervalID= setInterval(()=>{
        document.getElementById("h1tag").innerHTML=(second+" "+ "sec");
        second++;
        
    },1000)
}
function stop(){
    clearInterval(intervalID);
    
}
function reset(){
    clearInterval(intervalID);
    second=0;
    document.getElementById("h1tag").innerHTML=(second+" "+ "sec");
}