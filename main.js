Webcam.set({
    width:300,
    height:350,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera)
function take_photo(){
      Webcam.snap(function(image){
          document.getElementById("result").innerHTML="<img id='photo' src='"+image+"'>";
      });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SqX_wmKDg/model.json",modelloaded);
function modelloaded(){
    console.log("Model Is Loaded")
}