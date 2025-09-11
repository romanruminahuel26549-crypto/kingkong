let contador=1;
let texto;

function contador (button){
    contador++;
    if(contador%3===0 && contador%5===0){
        texto='kingKong';
    }else if(contador%3===0){
        texto='King';
    }else if(contador%5===0){
        texto='Kong';
    }else{
        texto=contador;
    }
    document.getElementById('resultado').textContent=texto;
}
if((texto!==button && button=='num') ||
((contador%5===0 || contador%3===0) && button=='num')){
    document.getElementById('resultado').textContent=perdiste;
    contar=1;
}



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