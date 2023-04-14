
let Autos
let Seleccionado

const CatalogoContainer=document.getElementById("CatalogoContainer");
const Container=document.getElementById("AutoContainer");

function AbrirAuto(){
   localStorage.setItem("auto",JSON.stringify(Seleccionado))
   window.location.href='auto.html'
}


function Filtrar(){
   const Marca=document.getElementById("marca").value
   const Color=document.getElementById("color").value
   CatalogoContainer.innerHTML=`<br>`
   for(auto of Autos){
      if(auto.Marca==Marca && auto.Color==Color || Marca=="Todas" && auto.Color==Color ||
      auto.Marca==Marca && Color=="Cualquiera" || Marca=="Todas" && Color=="Cualquiera"){
         CatalogoContainer.innerHTML+=`
         <div class="card" onclick="Seleccionado=auto; AbrirAuto();">
            <img class="imgcard" src="${auto.URL}">
            <div class="cardescripcion">
               <h4><b>${auto.Marca} ${auto.Modelo}</b></h4>
               <p>${auto.Descripcion}</p>
            </div>
         </div>`
      }
      
   }
}

fetch("./BD/Autos.json")
.then(response => {return response.json();})
.then(data =>{
   console.log(data)
   Autos=data.Autos
   Filtrar()
})
