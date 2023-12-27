//creando el arreglo
var miArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//creando ciclo for para iterar
for(i=0;i<miArray.length;i++){

    if(miArray[i] %2==0){
        console.log (`el numero es ${miArray[i]} y es par`);

}
else{
    console.log(` el numero es ${miArray[i]} y es impar.`);
}
}