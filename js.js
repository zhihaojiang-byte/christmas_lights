const ball1Arr = []
const colorArr = ["#FF69B4","#9932CC","#FF0000","#FF8C00","#FFFF00","#F5F5F5","#00BFFF", "#00FF00"]
class Ball{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        do {
            this.dx = Math.trunc(Math.random()*20)-10;
            this.dy = Math.trunc(Math.random()*20)-10;
        }while (this.dx === 0 && this.dy === 0)
        this.radius = 25;
        this.color = colorArr[Math.trunc(Math.random()*colorArr.length)]
        this.opacity = 0.8;
        this.dom = document.createElement("div");
        this.dom.style.width = `${this.radius*2}px`
        this.dom.style.height = `${this.radius*2}px`
        this.dom.style.backgroundColor = this.color;
        this.dom.className = "ball"
        this.dom.style.top = `${this.y-this.radius}px`
        this.dom.style.left = `${this.x-this.radius}px`

        document.body.appendChild(this.dom)
        ball1Arr.push(this);
        this.set_life();
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.radius += 0.15;
        this.opacity -= 0.005;
        this.dom.style.top = `${this.y-this.radius}px`
        this.dom.style.left = `${this.x-this.radius}px`
        this.dom.style.width = `${this.radius*2}px`
        this.dom.style.height = `${this.radius*2}px`
        this.dom.style.opacity = `${this.opacity}`
    }

    set_life(){
        const self = this;
        setTimeout(function (){
            ball1Arr.shift()
            document.body.removeChild(self.dom)
        },4000)
    }
}

setInterval(function () {
    for (const ball of ball1Arr){
        ball.update()
    }
},20)


let lock = true;

document.addEventListener("mousemove", function (e){
    if (!lock) return;
    lock = false;
    setTimeout(function () {
     lock = true
    }, 10)

    new Ball(e.clientX, e.clientY)
},false)

