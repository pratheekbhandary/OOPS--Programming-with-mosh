//You can also create functions like this
const Circle1=new Function(`radius`,`
this.radius=radius;
this.draw=function(){
    console.log('draw');
}`);

let a=new Circle1(1);
log(a);


//Using Call
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
    return this;
}

const x=Circle.call({},1);
log(x)

//Changing Config of property of an object
let person={ name:'Prat'};

let objectBase=Object.getPrototypeOf(person);
let discriptor= Object.getOwnPropertyDescriptor(person,'name');
console.log(discriptor);

Object.defineProperty(person,'name',{
    writable:false,
    value:1000
});

console.log(person)