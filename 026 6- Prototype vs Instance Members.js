function Circle(radius){
    this.radius=radius;
    this.move=function(){
        console.log('Moving');
    }
}

Circle.prototype.draw=function(){
    this.move();
    console.log('draw',this);
}
Circle.prototype.toString=function(){
    return `Circle with radius ${this.radius}`
}

const c1= new Circle(1);
c1.draw()
console.log(c1.toString())