function connect(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
  }
  
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
  
  
  connect(Father,GrandFather);
  connect(Son,Father);
  
  
  Son.prototype.sonPrototype = function() {
  console.log('sonPrototype')
  };
  
  Father.prototype.fatherPrototype= function(){
    console.log('fatherPrototype');
  }
  
  GrandFather.prototype.grandFatherPrototype= function(){
    console.log('grandFatherPrototype');
  }
  
  
  
  s=new Son();
  
  
  