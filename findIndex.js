Array.prototype.MyIndex=function(callback,thisarg){
    if(typeof callback !== 'function'){
        throw Error(this, + 'this is not a callable function')
    }

    for(let i =0;i<this.length;i++){
        var context=thisarg?thisarg:this
        var res=callback.call(context,this[i],i,this)
        if(res){
            return i
        }
    }
return -1
    
}
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 10;

console.log(array1.MyIndex(isLargeNumber));
