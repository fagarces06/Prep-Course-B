// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var nombrevariable=nombre;
  var edadvariable=edad;
  var usuario = {
    nombre: nombrevariable,
    edad: edadvariable,    
    meow: function() {
        console.log('Meow!');
    }
  }
  return (usuario);
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  var objetoprincipal=objeto;
  objetoprincipal[property]= null;
  return(objetoprincipal);
  //return objetoprincipal;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  var variablemetodo=metodo;
  objeto[variablemetodo]();


}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var objeto= objetoMisterioso;

  var resultado= objeto['numeroMisterioso']*5;
  return (resultado);

}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];
  return (objeto);
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var persona = {
    
  }

  persona.nombre= nombre;
  persona.email= email;
  persona.password= password;
  return(persona);

}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:


  if (usuario["email"]) {
    return true;
  } else {
    return false;
  }  


}


function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) {
    return true;
  } else {
    return false;
  }  
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if (usuario['password']===password) {
    return true;
  } else {
    return false;
  }  


}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario['password']=nuevaPassword;
//  console.log(usuario );
  return  usuario ;

}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

usuario['amigos'].push(nuevoAmigo);
return   usuario;

}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
 // console.log(usuarios);
  for(i in usuarios){
    usuarios[i]['esPremium']=true;

  }

  return  (usuarios);
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  
  var sumatoria=0;
  
  for(i in usuario.posts){
    sumatoria= sumatoria +(usuario.posts[i].likes);

    

  }
 
 
  return  (sumatoria);   
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:


  
  
    var PrecioDescuento= function (){
        var precio= producto['precio'];
        var porcentajeDeDescuento= producto['porcentajeDeDescuento'];
        var operación= producto['precio']*producto['porcentajeDeDescuento'];
        var precionuevo= precio-operación;
        producto['precio']= precionuevo;
        console.log(producto);
      //return producto;

    };

    producto.calcularPrecioDescuento= PrecioDescuento ;

    producto.calcularPrecioDescuento();

    return producto;

}

/////////////ELEMENTOS CREADOS PARA LA HOMEWORK4////////////////
var usuario = {
  nombre: 'Fabio',
  edad: '28',
  email: 'fabio@soyherny.com',
  numeroMisterioso: 10,
  password: 'hola',
  amigos: ['felipe','martha','cindy','fabio'],    
  meow: function() {
    
    return 1;
  }
}
var usuariolikes = {  
 posts: [{      
                  likes: 4    
         },
         { likes:6

         }]   
};
var usuariogrande={
  usuario1: {
    nombre: 'fabio',
    apellido: 'garces',
    email: 'fabio@soyhenry.com',
    esPremium: null,
    posts: {
      post: {
        likes: 10,
        coments: 12
      }
      
    }

  },
  usuario2: {
    nombre: 'henry',
    apellido:'sanchez',
    email: 'henry@soyhenry.com',
    esPremium: null,
    posts: {
      
      post:{
        likes: 15,
        coments :6
      }
    }

  }
}

var producto= {

  precio: 100,
  porcentajeDeDescuento: 0.20


};


agregarPropiedad (usuario, 'profesion');
invocarMetodo (usuario, 'meow');
multiplicarNumeroDesconocidoPorCinco (usuario);
eliminarPropiedad (usuario, 'edad');
nuevoUsuario ('fabio', 'fabio@soyherny.com', '123');
tieneEmail (usuario);
tienePropiedad (usuario, 'nombre');
verificarPassword (usuario, 'hola');
actualizarPassword (usuario, 'nuevagPassword');
agregarAmigo (usuario, 'isabella');
pasarUsuarioAPremium (usuariogrande);
sumarLikesDeUsuario (usuariolikes);
agregarMetodoCalculoDescuento (producto);
//////////////////////////



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}