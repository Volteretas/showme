var indice = 1;
mostrarFoto(indice);

// Next/previous controls
function navegarFoto(n) {
  mostrarFoto(indice += n);
}

// Thumbnail image controls
function fotoActual(n) {
  mostrarFoto(indice = n);
}

function mostrarFoto(n) {
  var i;
  var fotos = document.getElementsByClassName("foto");
  var circulos = document.getElementsByClassName("circulo");
  if (n > fotos.length) {indice = 1}
  if (n < 1) {indice = fotos.length}
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";
  }
  for (i = 0; i < circulos.length; i++) {
      circulos[i].className = circulos[i].className.replace(" active", "");
  }
  fotos[indice-1].style.display = "block";
  circulos[indice-1].className += " active";
}
/*------------------------------VALIDACION----------------------------*/

function validar()
            {
                var n=document.miformulario.nbre.value.trim();

                if((!n) || (n.length<4) )
                {
                    alert('Nombre invalido');
                    return false;
                }


                var e=document.miformulario.edad.value;

                if(!Number.parseInt(e))
                {
                    alert('Debe ingresar su edad');
                    return false;
                }
                if(Number(e) < 18)
                {
                    alert('Debe ser mayor de edad')
                    return false;
                }
                return true;
            }

            function confirmacion(bol){
                if(!bol){
                    return false;
                }else{
                    var boolean = confirm('Desea enviar su informacion');

                    if(boolean && bol){
                        return true;
                    }else{
                        return false;
                    }
                }
                
                    
            }

/*-------------------------VENTANA-FORMULARIO-------------------------*/

function showModal(contentHtml) {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `

        <div class="modal__ineer" style="text-align: center;">
            <div class="modal__top">
                <div>
                    <div id="flayer"></div>
                    <div id="fcon">
                        <div class="modal__close"><span class="material-icons">close</span></div><br>
                        
                        <div class="modal__content">
                          
                          <form name="miformulario">
                          <span></span><br>
                          <h1>Crear Cuenta</h1>
                            Tu Nombre<br>
                            <input type="text" name="nbre"><br>
                            Tu Edad<br>
                            <input type="text" name="edad"><br><br>
                    
                            Seleccionar Sexo<br>
                            <input type="radio" name="sexo" value="Hombre" checked>Hombre 
                            <input type="radio" name="sexo" value="Mujer">Mujer <br><br>

                            Seleccionar Ocupacion<br>
                            <select name="Opciones" id="select"><
                              <option value="1">Trabajando</option>
                              <option value="2">Estudiando</option>
                            </select><br><br>

                            Agregar Descripcion:<br>
                            <textarea name="area" id="textarea" cols="30" rows="5"></textarea><br>

                            <input type="submit" name="btn_enviar" value="Cargar" onclick="return confirmacion(validar())">
                            <input type="reset" name="btn_reset" value="Reiniciar">
                          </form>

                        </div>
                        <div class="modal__bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

  modal.querySelector(".modal__close").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
}

/*-----------------------AGREGAR ELEMENTO--------------------*/

function agregarElemento(){

  nombre = prompt("Ingrese el nombre");
  fecha = prompt("Ingrese la fecha");
  tipo = prompt("Ingrese el medio");
  url = prompt("Ingrese la url de la portada");

  const elemento = document.createElement("div");
  var ejemplo = document.getElementById("ejemplo");
  elemento.classList.add("elemento");

  elemento.innerHTML = `
      <img src="${url}">
      <div>
        <h3>${nombre}</h3>
        <p>${fecha}</p>
        <p>${tipo}</p>
      </div>`;

  ejemplo.appendChild(elemento);
          
}