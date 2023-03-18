

function login(e) {
  e.preventDefault();

  let arreglo_usuarios = localStorage.getItem("clientes");  // capturo los datos guardados
  arreglo_usuarios = JSON.parse(arreglo_usuarios);  // parseo el objeto JSON 

  
  if (arreglo_usuarios) {
    // si hay nuevos elementos se recorren uno a uno y se van agregando a la lista de usuarios.
    arreglo_usuarios.forEach(elementos => lista_usuarios.push(elementos)); 
  }
    // Una vez que se añaden los nuevos usuarios a lista que ya existían se procede a la búsqueda.

  let user_email = document.getElementById("email_usuario").value;
  let user_pass = document.getElementById("contraseña_usuario").value;
  let lista_email = lista_usuarios.find((usuario) => usuario.email == user_email); // compruebo que el email exista.
  let lista_contraseña = lista_usuarios.find((usuario) => usuario.contraseña == user_pass);// compruebo que la contraseña exista.

  if (lista_contraseña && lista_email) {  // si el email y contraseña coinciden se envía el valor login-correcto.

    mje_log = document.getElementById("form_login");

    let usuario_logueado = JSON.stringify(lista_email);

    // Guardo los datos del usuario logueado para utilizarlos más tarde.

    sessionStorage.setItem("usuario_logueado", usuario_logueado);
    
    let mensaje = document.createElement("p");

    mensaje.className = "mensaje_login";
    mensaje.innerHTML = `<p>Bienvenido al sistema.</p>`;
    mje_log.append(mensaje);

    let usuario_incorrecto = document.getElementById("usuario_incorrecto");
    usuario_incorrecto.style = "display:none";


    // Aquí se crea la key login que contendrá el valor de login-correcto
    // para luego ser utilizada en el inicio de sesión. 

    sessionStorage.setItem("login", "login-correcto");
    location.href = "http://127.0.01:5500/index.html";
  } else {

    // si los datos no coinciden no se realiza el login.

    Swal.fire({
      title:"ERROR",
      text:"Usuario o contraseña incorrectos",
      icon:"error",
      showClass:{
        popup:"animate__animated animate__bounceIn"
      },
      hideClass:{
        popup:"animate__animated animate__flipOutY"
      }
    })

    mje_log = document.getElementById("form_login");

    let mensaje = document.getElementById("usuario_incorrecto");
    mensaje.innerText = "Usuario o contraseña incorrectos"  

  }
}



let form_login = document.getElementById("form_login");
form_login.addEventListener("submit", login);


