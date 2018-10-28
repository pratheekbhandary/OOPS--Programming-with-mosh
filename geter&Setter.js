const log=(...x)=>console.log(...x);
function Circle(radius){
    this.radius=radius;
    let defaultLocaton={x:0,y:0};
    this.draw=function(){
        console.log('draw');
    }

    Object.defineProperty(this,"defaultLocation",{
        get: function(){
            return defaultLocaton;
        },
        set: function(dL){
           if(!dL.x || !dL.y){
               throw new Error("Enter Valid Location");
           }
           defaultLocaton=dL; 
        }
    })
}

const c=new Circle(1);
log(c.defaultLocation)
