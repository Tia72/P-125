difference = 0;
leftWristY = 0;
rightWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#ffb6c1');
    
    textSize(difference);
    fill('#FF69B4');
    text('Tia', 50, 400);
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.y;

        difference = floor(leftWristY - rightWristY);

        console.log("leftWristY - " + leftWristY + "rightWristY - " + rightWristY + "difference - " + difference);
    }
}