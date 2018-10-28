//032 1- Creating Your Own Prototypical Inheritance
function Shape(){

}

Shape.prototype.draw=function(){
  console.log('draw');
}

function Circle(){

}

Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.radius=function(){
  console.log('radius');
}

s=new Shape();
c=new Circle();


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create.brush: js line-numbers language-js
//Son--->Father--->GrandFather
function Son() {
    GrandFather.call(this);
    Father.call(this);
    this.sonMethod=()=>{
      console.log(this);
    }
  }
  
  function GrandFather(){
    this.grandFatherMethod=function(){
      console.log('grandFatherMethod');
    }
  }
  
  function Father(){
    this.fatherMethod=function(){
      console.log('fatherMethod');
    }
  }
  
  
  
  Father.prototype = Object.create(GrandFather.prototype);
  Father.prototype.constructor=Father;
  
  Son.prototype=Object.create(Father.prototype);
  Son.prototype.constructor = Son;
  
  Son.prototype.sonPrototype = function() {
  console.log('sonPrototype')
  };
  
  GrandFather.prototype.grandFatherPrototype= function(){
    console.log('grandFatherPrototype');
  }
  
  Father.prototype.fatherPrototype= function(){
    console.log('fatherPrototype');
  }
  
  s=new Son();


