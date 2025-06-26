Array.prototype.MyReduce=function(cb,initval){
    if(typeof cb !=='function'){
        throw new Error()
    }
    if(this.length===0){
        return initval
    }
    
    let accumulator=initval!=null ? initval:this[0]
    let startindex=initval!=null ?0:1
    for(let i=startindex;i<this.length;i++){
        accumulator=cb(accumulator,this[i],i)
    }
    return accumulator
}
const sum1 = [1,2,3,4].MyReduce((acc, val) => {
    return acc + val;
  })
  console.log(sum1);
  
  
  
  