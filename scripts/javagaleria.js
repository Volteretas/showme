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
                
                var letters = /^[A-Za-z]+$/;
                if(!n.match(letters)){
                  alert('Un nombre solo puede tener letras');
                  return false
                }

                var e=document.miformulario.edad.value;

                if(!Number.parseInt(e))
                {
                    alert('Debe ingresar su edad');
                    return false;
                }
                if(Number(e) < 18 || Number(e) > 100)
                {
                    alert('Edad invalida')
                    return false;
                }

                var o =document.miformulario.Opciones.selectedIndex
                
                if(o == 0){
                  alert('Debe seleccionar una ocupacion');
                  return false;
                }

                var s =document.miformulario.sexo
                var cc=0;
                for(i=0; i<s.length;i++){
                  if(s[i].checked){
                    cc++;
                  }
                }
                if(cc == 0){
                  alert('Seleccione un sexo');
                  return false;
                }

                var cb =document.miformulario.cbaceptar

                if(!cb.checked){
                  alert('Acepte los terminos');
                  return false;
                }
                
                var a=document.miformulario.area.value.trim();
                if((!a) || (a.length < 10)){
                  alert('Agrege una biografia');
                  return false;
                }

                if(!confirm('Desea enviar su informacion?')){
                  return false;
                }
                
                return true;
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
                              
                              
                                <span></span><br><h1>Crear Cuenta</h1>
                                Nombre: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="nbre"placeholder="Ingrese nombre" ><br><br>
                                Contraseña: &nbsp;&nbsp;
                                <input type="password" name="pass" placeholder="Ingrese contraseña"><br><br>
                                Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="email" name="mail" placeholder="EJ: nombre@mail.com" ><br><br>
                                Telefono: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <input type="tel" name="telefono" placeholder="EJ: 1000-100000" pattern="[0-9]{4}-[0-9]{6}"><br><br>
                                Edad: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="edad" placeholder="Debe ser mayor de edad"><br><br>
                        
                                Seleccionar Sexo<br>
                                <input type="radio" name="sexo" value="Hombre">Hombre 
                                <input type="radio" name="sexo" value="Mujer">Mujer <br><br>
    
                                Seleccionar Ocupacion<br>
                                <select name="Opciones" id="select">&lt;
                                  <option valur="">Seleccione una ocupacion</option>
                                  <option value="1">Trabajando</option>
                                  <option value="2">Estudiando</option>
                                </select><br><br>
    
                                Agregar Biografia:<br>
                                <textarea name="area" id="textarea" cols="30" rows="5" placeholder="Ingrese mas de 10 caracteres" style="resize: none;" ></textarea><br><br>
    
                                Acepta los terminos y condiciones <input type="checkbox" name="cbaceptar" value="acepto"><br><br>
    
                                <input type="submit" name="btn_enviar" value="Cargar" onclick="return validar()">
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