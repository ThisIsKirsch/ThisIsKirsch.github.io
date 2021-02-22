var canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
console.log(innerWidth);
console.log(innerHeight);
var ctx = canvas.getContext('2d');
var colors = ["#05c7c3", "#053c8c", "#1a1731"];
console.log(colors.length);

function Circle(x, y, dx, dy, r){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = r;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 10;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius ;
    var dx = (Math.random() - 0.5) * 6;
    var dy = (Math.random() - 0.5) * 6;
    circleArray.push( new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();