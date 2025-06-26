Array.prototype.Mymap=function(cb,thisarg){
    if(typeof cb !=='function'){
        throw Error
    }
    let res=[]
    for(let i=0;i<this.length;i++){
        if(i in this){
            
            var value=cb(this[i],i ,this)
        }
        res.push(value)
}
return res
    }
      
let arr=[1,2,3]
let array=arr.Mymap((num,index)=>{
    return num *2
})
console.log(array);
