function preload(){
    clasifier=ml5.imageClassifier("DoodleNet");
}


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("turquoise");
    canvas.mouseReleased(classifyCanvas);
    synth =window.speechSynthesis;
}
function draw(){
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
    }
    
}
function classifyCanvas(){
clasifier.classify(canvas,gotresult);
}
function limpiar_canvas(){
    background("turquoise");
}
function gotresult(error,result){
if(error){
console.log(error);
}else {
 console.log(result);   
 document.getElementById("label").innerHTML = "dibujo: " + result[0].label;
 utterThis=new SpeechSynthesisUtterance(result[0].label);
 synth.speak(utterThis);
 document.getElementById("confidence").innerHTML="confiabilidad: "+Math.round(result[0].confidence * 100)+" %";
}
}
