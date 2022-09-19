"use strict";

class Disk {
    x;
    y;
    height;
    color;

    constructor ( x, y, height, color ) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.color = color;
    }

    draw (context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.height, 0, 2 * Math.PI);
        console.log("hello world");
        context.fill();
    }
}