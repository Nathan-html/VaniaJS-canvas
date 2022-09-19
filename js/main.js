var canvas = document.getElementById("masterpiece"); 
var context = canvas.getContext("2d");
// new Disk(80, 80, 70, "#FF4422").draw(context);

canvas.addEventListener('click', event => {
    let height = ("Random : ", Math.random() * (50 - 15 + 1 ) + 15);
    console.log("X : ", event.offsetX);
    console.log("Y : ", event.offsetY);
    console.log("Random : ", height);
    new Disk(event.offsetX, event.offsetY, height, "#" + Math.floor(Math.random()*16777215).toString(16)).draw(context);
});