function kingKong(n){
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            console.log('kingKong');
        }else if(i%3===0){
            console.log('King');
        }else if(i%5===0){
            console.log('Kong')
        }else{
            console.log(i)
        } 
    }
}
kingKong(100);