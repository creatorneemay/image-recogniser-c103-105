Webcam.set({
    width: 350, height: 300, image_format:'jpeg', jpeg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function take_pic(){
    Webcam.snap(function(img_url){
        document.getElementById("result").innerHTML="<img id='cap_img' src='"+img_url+"'>";
    });
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_N1qXnna3/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded")
}
function check(){
    img=document.getElementById("cap_img");
    classifier.classify(img,getresult);
}
function getresult(error,result){
    if(error){
        console.log(error);
    }
    else{console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}
