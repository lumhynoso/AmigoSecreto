// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


/*
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
-------------------------------------------------
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.


////////////////////////////////////////////


*/

let amigos = []

//id="amigo"/ agregarAmigo()/ id="listaAmigos" 


function agregarAmigo()
{
    let HM = document.getElementById("amigo").value;
    console.log(HM);

    if (HM==""){
        window.alert( "Por favor, inserte un nombre.");
        
    }
    else{

    amigos.push(HM);
    console.log(amigos);
    document.getElementById("amigo").value='';
    LlenarLista();

    }
    
}
function LlenarLista()
{

    let AB =document.getElementById("listaAmigos");
    AB.innerHTML="";
    let CD="";
    
    for(var i =0; i<amigos.length; i++)
    {
        CD +="<li>"+amigos[i]+"</li>";

    }
    AB.innerHTML=CD;

}


function sortearAmigo()
{
    let cant =amigos.length;
    let AB =document.getElementById("resultado");
    AB.innerHTML="";

    if(cant!=0)
    {
        let Alea=Math.floor(Math.random()* cant);
        AB.innerHTML="<li>"+amigos[Alea]+"</li>";
    }
}

