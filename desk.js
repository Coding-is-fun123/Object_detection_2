status="";
function preload(){
    img= loadImage("desk.jpg");
}
function setup(){
    canvas= createCanvas(700,600);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML= "STATUS : DETECTING OBJECTS";
    
}
function modelLoaded(){
    console.log("MODEL IS LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    status= true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
}