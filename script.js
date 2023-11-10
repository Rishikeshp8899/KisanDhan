var manu = document.getElementById("menu-bars");
var myDiv=document.querySelector('nav')
var sarch= document.querySelector('#search-form')
console.log(manu)
manu.addEventListener('click', function() {
    manu.classList.toggle('fa-times')
    myDiv.classList.toggle('activ')
    
})
document.querySelector("#search-icon").onclick=()=>{
    
   sarch.classList.toggle("activa")
    console.log(sarch)
}
document.querySelector("#close").onclick=()=>{
    sarch.classList.toggle("activb")
    sarch.classList.remove("activa")
 }

 const swiper = new Swiper('.swiper', {
   
    spaceBetween: 30,
    centeredSlides:true,
    // Responsive breakpoints
    autoplay: {
      // when window width is >= 320px
   deplay:{
    delay:7500,
    disableOnInteraction:false,
   },
      // when window width is >= 480px
    pagination:{
        el:".swiper-pagination",
        clickable:true
    },
      // when window width is >= 640px
   loop:true,
    }
  })