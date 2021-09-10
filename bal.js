class Bal {
    x;
    y;
    speedX;
    speedY;

    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        speedX = 3;
        speedY = -2; 
    }
    show() {
        fill(this.x, this.y, 50, 50);
    }
    update() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
}