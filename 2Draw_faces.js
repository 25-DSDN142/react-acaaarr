// ----=  Faces  =----
/* load images here */
let img;

function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
  img = loadImage('/images/filter.PNG');
  img2 = loadImage('/images/IMG_4363.PNG');


}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    let firstX = face.keypoints[246].x;
    let firstY = face.keypoints[246].y;
    triangle(firstX, firstY, firstX -10, firstY - 10, firstX + 10, firstY-10);
    ellipse(firstX -5, firstY - 10, 10, 10);
    ellipse(firstX + 5, firstY - 10, 10, 10);
    let secondX = face.keypoints[466].x;
    let secondY = face.keypoints[466].y;
    triangle(secondX, secondY, secondX -10, secondY - 10, secondX + 10, secondY-10);
    ellipse(secondX -5, secondY - 10, 10, 10);
    ellipse(secondX + 5, secondY - 10, 10, 10);
    //two mini hearts on the far ends of the eyelids

    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let middleforeheadx = face.keypoints[9].x;
    let middleforeheady = face.keypoints[9].y;
    triangle(middleforeheadx, middleforeheady, middleforeheadx -20, middleforeheady - 20, middleforeheadx + 20, middleforeheady-20);
    ellipse(middleforeheadx -9, middleforeheady - 20, 20, 20);
    ellipse(middleforeheadx + 9, middleforeheady - 20, 20, 20);
    // a big heart on the forehead
    
    let rightforeheadX = face.keypoints[297].x;
    let rightforeheadY = face.keypoints[297].y;
    image(img, rightforeheadX-30, rightforeheadY-20);
    img.resize(100, 100);
    let leftforeheadX = face.keypoints[67].x;
    let leftforeheadY = face.keypoints[67].y;
    image(img2, leftforeheadX-70, leftforeheadY-10);
    img2.resize(100, 100);

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    /*
    Start drawing on the face here
    */
    noStroke()
    fill(225, 225, 0);
    // fill(get(leftEyeCenterX, leftEyeCenterY))

    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    drawPoints(face.lips);
    drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);

    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}