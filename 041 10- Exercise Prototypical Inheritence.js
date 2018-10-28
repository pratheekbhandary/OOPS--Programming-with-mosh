function HtmlElement(){
    this.click=function(){
      console.log('clicked');
    }
  }
  
  HtmlElement.prototype.focus=function(){
    console.log('focused');
  }
  
  function HtmlSelectElement(arr){
    this.items=Array.isArray(arr)?arr:[];
    this.addItems=function(item){
      this.items.push(item);
    }
    this.removeItem=function(itemToRemove){
      this.items=this.items.filter(item=>item!==itemToRemove)
    }
  }
  
  HtmlSelectElement.prototype=new HtmlElement();
  HtmlSelectElement.prototype.constuctor=HtmlSelectElement;
  
  const e=new HtmlElement();
  const s=new HtmlSelectElement();
  