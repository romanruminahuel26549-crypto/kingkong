const numero = document.getElementById('numero');
const jugar = document.getElementById('jugar');
const limpiar = document.getElementById('limpiar');


function jugar(){
    const numero = (numero);
    if (numero [0] !! numero <=0){
        resultado='';
        return;
    }
    }
    

let resultado='';
for(let i=1;i<=numero;i++){
    if(i%3===0 && i%5===0){
        resultado += 'kingKong';
    }else if(i%3===0){
        resultado += 'King';
    }else if(i%5===0){
        resultado += 'Kong'
    }else{
        resultado += i
    }
    }
resultado=resultado;

function limpiar(){
    resultado='';
    numero=0;
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