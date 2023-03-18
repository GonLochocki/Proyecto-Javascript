class Usuario {
  constructor(nombre, apellido, email, contraseña, dni, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.contraseña = contraseña;
    this.dni = dni;
    this.edad = edad;
  }
}

function popup_registro_exitoso(){
  Swal.fire({ 
    title:"Exito",    
    text:"Se ha registrado con éxito!",
    icon:"success",
    footer:"Regrese al inicio para iniciar sesión.",
    showClass:{
      popup:"animate__animated animate__bounceIn"
    },      
    hideClass:{
      popup:"animate__animated animate__fadeOutLeft"
    } 
  });
}

function popup_registro_invalido(){
  Swal.fire({
    title:"ERROR",
    text:"Debe ser mayor de edad para registrarse",
    icon:"error",
    showClass:{
      popup:"animate__animated animate__bounceIn"
    },
    hideClass:{
      popup:"animate__animated animate__flipOutY"
    }
  })
}

let nuevos_usuarios = [];

function registrar_usuario() {
  // capturo los valores que tendrá el objeto.

  let nombre = document.getElementById("nombre_usuario").value;
  let apellido = document.getElementById("apellido_usuario").value;
  let dni = document.getElementById("dni_usuario").value;
  let edad = document.getElementById("edad_usuario").value;
  let email = document.getElementById("email_usuario").value;
  let contraseña = document.getElementById("contraseña_usuario").value;

  // creo el nuevo objeto con los valores previemente registrados.

  let nuevo_usuario = new Usuario(
    nombre,
    apellido,
    email,
    contraseña,
    dni,
    edad
  );

  //compruebo la edad

  if (edad >= 18) {
    
    setTimeout(popup_registro_exitoso, 500);       

    // si es mayor de edad se guarda el objeto en el arreglo.

    nuevos_usuarios.push(nuevo_usuario);

    // una vez guardado el nuevo objeto casteo el arreglo a JSON.

    let lista_usuarios_JSON = JSON.stringify(nuevos_usuarios);

    // luego guardo el JSON en localStorage los nuevos usuarios bajo la llave CLIENTES para luego llamarlos en el login.

    localStorage.setItem("clientes", lista_usuarios_JSON);
    
  } else {
    // si no es mayor de edad no se registra. 
    
    setTimeout(popup_registro_invalido, 500);
   
  }
}

let boton_para_registro = document.getElementById("btn_log");

boton_para_registro.addEventListener("click", registrar_usuario);



