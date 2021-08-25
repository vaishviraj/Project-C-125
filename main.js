noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x+100;
        noseY = results[0].pose.nose.y+100;
        console.log("noseX = "+noseX+ "noseY = " +noseY);
        leftWristX = results[0].pose.rightWrist.x;   
    rightWristY = results[0].pose.rightWrist.y;
    difference = floor(leftWristX - rightWristY);

    console.log("leftWristX = "+leftWristX+ "rightWristY = " +rightWristY+ "difference = " +difference);
    }
}

function draw(){
    background('#969A97');

    textSize(width / 3);
    document.getElementById("name_fontsize").innerHTML = "Width And Height Of the Name Will Be = " +difference+"px";
    fill('#F90093');
    stroke('#F90093');
    text("Vaishvi Raj", noseX, noseY);
    text(200,200);
    textSize(width / difference);
}