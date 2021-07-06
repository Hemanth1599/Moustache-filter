noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/hvqYfg3W/french-moustache-png-3-Transparent-Images.png");
}

function setup(){
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    image(moustache,noseX-40,noseY-10,80,50);
}

function take_snapshot(){
    save('mymoustache.jpg');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}