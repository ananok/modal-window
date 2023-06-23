let modal=document.querySelector(".modal")
let overlay=document.querySelector(".overlay")
let openModal=document.querySelectorAll(".show-modal")
let closeModal=document.querySelector(".close-modal")

let openFunc=function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

let closeFunc=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
}

openModal.forEach((element)=>{
    element.addEventListener("click", openFunc)
})

closeModal.addEventListener("click", closeFunc)
overlay.addEventListener("click", closeFunc)

document.addEventListener("keydown", function(e){
    if (e.key==='Escape' && !modal.classList.contains("hidden")){
        closeFunc()
    }
})

