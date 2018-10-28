function Circle(radius){
    this.radius=radius;
}

Circle.prototype.draw=function(){
    console.log('draw',this);
}

const c1= new Circle(1);
c1.draw()

console.log(Object.keys(c1));   //Returns insance members

for (let key in c1)console.log(key); //Returns instance members + prototype

console.log(c1.hasOwnProperty('radius'));  //t
console.log(c1.hasOwnProperty('draw'));  //f