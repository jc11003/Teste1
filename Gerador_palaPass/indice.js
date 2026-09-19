const BTNel = document.querySelector(".button")
const entradaEl = document.getElementById("entrada")
const iconCopyEl = document.querySelector(".icon") 
const alertaContetorEl = document.querySelector(".alerta-contentor")


BTNel.addEventListener("click", ()=>{
    criarpalavrapasse();
})

iconCopyEl.addEventListener("click", ()=>{
    copyPalavrapasse();
    if(entradaEl.value){
    alertaContetorEl.classList.remove("active");
    setTimeout(()=>{
        alertaContetorEl.classList.add("active");
    }, 1300)
}
})

function criarpalavrapasse(){
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const palavrapasseLength = 14;
  let palavrapasse = "";
  for (let index = 0; index < palavrapasseLength; index++) {
    const randomNum = Math.floor( Math.random()* chars.length);
    palavrapasse += chars.substring(randomNum, randomNum +1 );
  }
  entradaEl.value = palavrapasse;
  alertaContetorEl.innerText = " Copiado com sucesso !";

}    


function copyPalavrapasse() {
    entradaEl.select();
    entradaEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(entradaEl.value);
    
}