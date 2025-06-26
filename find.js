Array.prototype.MyFind=function(callback,thisarg){
    if(typeof callback !=='function'){
        throw Error(this + 'this is not a calalble')
    } 
    var context=thisarg?thisarg:this
    for(let i =0;i<this.length;i++){
        if(i in this){
           
         
         var res=res=callback.call(context,this[i],i,this)
          if(res){
            return this[i]
          }
          
        }
        
    }
    return undefined
}
const array1 = [5, 12, 8, 130, 44];

const found = array1.MyFind((element) => element > 100);

console.log(found);