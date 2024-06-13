// pasar datos a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// borrar los datos en la pantall
function borrar(){
    document.getElementById('pantalla').value = '';
}
// calcular y mostrar resultado en pantalla
function calcular(){
    const pantalla = document.getElementById('pantalla').value;
    const resulado = eval(pantalla);
    document.getElementById('pantalla').value = resulado;
}
