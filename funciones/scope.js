var name = "Albeiro"

function scopeGlobal(){
    let apellido = 'Muriel';
    return console.log('Nombre: ' + name + '\nApellido: ' + apellido);    
}

scopeGlobal();

// console.log("Nombre: " + name + "\nApellido: " + apellido);    
//GENERA UN ERROR, porque apellido es una variable local