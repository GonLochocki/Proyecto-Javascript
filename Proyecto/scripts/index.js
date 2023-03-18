let ocultar_menu = document.getElementsByClassName("menu")[0];
let login = sessionStorage.getItem("login"); // traemos el valor guardado en la key.
let btn_cerrar = document.getElementById("cerrar");
let btn_empezar = document.getElementsByClassName("boton-empezar")[0];
let usuario_logueado = sessionStorage.getItem("usuario_logueado");
let contenedor_prestamo = document.getElementById("prestamos");

function popup_otorgado() {
  Swal.fire({
    title: "Felicitaciones!",
    text: "Su préstamo ha sido otorgado.",
    icon: "success",
    footer: "Se acreditará en las próximas 48hs.",
  });
}

function popup_simulacion() {
  Swal.fire({
    title: "Plazo Fijo",
    text: "Su préstamo ha sido otorgado.",
    icon: "success",
    footer: "Se acreditará en las próximas 48hs.",
  });
}

// Login //

if (login == "login-correcto") {
  ocultar_menu.style = "display:none";
  btn_empezar.style = "display:inline-block";
  btn_cerrar.style = "display: inline-block";

  btn_cerrar.addEventListener("click", function () {
    ocultar_menu.style = "display: inline-block";
    btn_empezar.style = "display: none";
    btn_cerrar.style = "display: none";
    contenedor_prestamo.style = "display: none";
    sessionStorage.clear();
  });
}

// Préstamos //

let boton_prestamo = document.getElementById("mio");
boton_prestamo.addEventListener("click", function () {
  // Genero un nuevo contenedor donde el usuario podra ingresar el monto y las cuotas del préstamo.

  let contenedor = document.getElementById("prestamos");
  contenedor.innerHTML = `<div class="text-center" id="prestamo">
  <div class="row"> 
    <div class="col">
      Ingrese el monto:
      <input id="monto"></input>
    </div>      
    <div class="col">
      Ingrese las cuotas:
      <input id="cuotas"></input>                      
    </div>
    <div class="col">      
      <button type="button" id="boton_calcular">Calcular</button> 
    </div>            
  </div>`;

  // Se ejecuta el calculo de las cuotas e interés.

  let boton_calcular = document.getElementById("boton_calcular");
  boton_calcular.addEventListener("click", function () {
    let monto = document.getElementById("monto").value;
    let cuotas = document.getElementById("cuotas").value;
    let valor_cuota;
    let total;
    let interes_neto;

    monto = parseInt(monto);
    cuotas = parseInt(cuotas);

    if (!NaN) {
      if (cuotas < 3) {
        total = monto * 0.35 + monto;
        valor_cuota = total / cuotas;
        interes_neto = total - monto;
      } else if (cuotas > 3 && cuotas <= 6) {
        total = monto * 0.6 + monto;
        valor_cuota = total / cuotas;
        interes_neto = total - monto;
      } else if (cuotas > 6 && cuotas <= 12) {
        total = monto * 0.9 + monto;
        valor_cuota = total / cuotas;
        interes_neto = total - monto;
      } else {
        total = monto * 1.2 + monto;
        valor_cuota = total / cuotas;
        interes_neto = total - monto;
      }
    }

    // una vez relizado el cálculo se imprime por pantalla el resultado de las variables.

    let calculo_final = document.getElementById("prestamo");
    calculo_final.innerHTML = `<div class="text-center id="calculo_final">
    <div class="row"> 
      <div class="col">
        Total
        <div id="total"></div>
      </div>      
      <div class="col">
        Valor Cuota
        <div id="valor_cuota"></div>                
      </div>
      <div class="col">
        Interes Neto
        <div id="interes_neto"></div>        
      </div>            
    </div>
    <div class="row">
      <div><button type="button" id="boton_solicitar">Solicitar</button></div>    
    </div>`;

    // muestro por pantalla los datos del préstamo

    let mensaje_total = document.getElementById("total");
    mensaje_total.style.color = "black";
    mensaje_total.innerText = `$${total}`;

    let mensaje_cuota = document.getElementById("valor_cuota");
    mensaje_cuota.style.color = "black";
    mensaje_cuota.innerText = `$${valor_cuota.toFixed(2)}`;

    let mensaje_interes = document.getElementById("interes_neto");
    mensaje_interes.style.color = "black";
    mensaje_interes.innerText = `$${interes_neto}`;

    // cuando el préstamo es solicitado

    let boton_solicitar = document.getElementById("boton_solicitar");
    boton_solicitar.addEventListener("click", function () {
      localStorage.setItem("prestamo_otorgado", usuario_logueado);
      let menu_prestamo = document.getElementById("prestamo");
      menu_prestamo.remove();

      setTimeout(popup_otorgado, 900);
    });
  });
});

// Simular un plazo fijo

 let boton_plazo_fijo = document.querySelector("#boton-plazo-fijo");
 boton_plazo_fijo.addEventListener("click", function () {

   let contenedor = document.querySelector("#contenedor-plazo-fijo");  

   contenedor.innerHTML = `
                                  <div class="plazo-fijo">
                                    <div class="monto-plazo-fijo">
                                    <label>Monto a invertir:</label>
                                     <input type="text" id="monto-plazo-fijo">
                                     </div>                                                                     
                                     <div class="dias-plazo-fijo">
                                     <label>Días de inversión:</label>
                                     <input type="text" id="dias-plazo-fijo">
                                    </div>  
                                    
                                    <button id="sim"class="btn btn-danger">Simular</button>
                                                              
                                  </div>                                  
                                 `;   

 let boton_para_simular = document.getElementById("sim");                                
                                 
 boton_para_simular.addEventListener("click", function(){

 let inversion = document.querySelector("#monto-plazo-fijo").value;
 let dias = document.querySelector("#dias-plazo-fijo").value;
 let tasa_diaria = 1;
 let ganancia;
                               
 if(dias <= "31"){
   ganancia = inversion * (tasa_diaria / 100) * dias;
  }
  else if(dias > "31" && dias <= "90"){
    ganancia = inversion * (tasa_diaria / 90) * dias;
  }
                               
  else{
    ganancia = inversion * (tasa_diaria / 78) * dias;
  }
  
  Swal.fire({
    title: "Tu ganancia será  ",
    text: `$${ganancia.toFixed(2)}`
  })  
                                 
 });

});

 
 
 