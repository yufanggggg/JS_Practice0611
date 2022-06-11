let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;

const gridLength = 200;
var sources = {
    Mountain:"images/material.png",
    Enemy:"images/Enemy.png"
};
//initial /start/ beginning
$(function () {
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    };
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    };
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    loadImages(sources,function(images){
            for (var x in mapArray) {
            for (var y in mapArray[x]) {
                if (mapArray[x][y] == 1) {
                    ctx.drawImage(imgMountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                } else if (mapArray[x][y] == 3) {
                     ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);

                    }
                }
            }

        }
    }
});
// user interaction / event trigger
$(document).on("keydown", function (event) {
    //debugger;
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {//Canvas(x,y)
        "x": -1,
        "y": -1
    };
    targetBlock = {//Data 2D array
        "x": -1,
        "y": -1
    }
    event.preventDefault();

    switch (event.code) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    if (targetImg.x <= 400 && targetImg.x >= 0 && targetImg.y <= 400 && targetImg.y >= 0) { 
       targetBlock.x= targetImg.y / gridLength; targetBlock.y=targetImg.x / gridLength; 
    } else {
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    if(targetBlock.x != -1 && targetBlock.y != -1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0: //ok
                $("#talkBox").text("");
                currentImgMain.x =targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: //mountain
                $("#talkBox").text("Mountain");
            case 2:
                $("#talkBox").text("finish");
                currentImgMain.x =targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3:
                $("#talkBox").text("hi");
                break;
        }
    }else{
        $("#talkBox").text("margin")
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength)
});