//Mixins OR Composition

const canEat={
  eat: function(){
    this.hunger--;
    console.log('Eating');
  }
}

const canWalk={
  walk: function(){
    console.log('Waking');
  }
}

const canSwim={
  swim: function(){
    console.log('Swimming');
  }
}

function Person(){

}
Object.assign(Person.prototype,canEat,canWalk);

const pratheek=new Person();

function Fish(){

}
Object.assign(Fish.prototype,canEat,canSwim);

const bangude=new Fish();
