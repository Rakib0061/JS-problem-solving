//  _________@@@@@@@@@@@@@@ preeloader @@@@@@@@@@@@@@_________ 

// let preeloader = document.getElementById("preeloader");

// window.addEventListener("load",()=>{
//     setTimeout(() => {
//         preeloader.style.display = "none";
//     }, 3000);
// });

// if(history.scrollRestoration){
//     history.scrollRestoration = "manual"
// }

//  _________@@@@@@@@@@@@@@ preeloader @@@@@@@@@@@@@@_________ 





//  _________@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@_________ 


let navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    let Y = window.scrollY;
    navbar.classList.toggle("sticky",Y > 0);
});

//  _________@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@_________ 





//  _________@@@@@@@@@@@@@@ Search Button @@@@@@@@@@@@@@_________ 

let input_Search = document.getElementById("nav_search");
let nav_search_btn = document.getElementById("nav_search_btn");

nav_search_btn.addEventListener("mouseenter", () => {
  input_Search.style.display = "block";
  input_Search.style.width = 150 + "px";
});
nav_search_btn.addEventListener("mouseover", () => {
  input_Search.style.display = "none";
  input_Search.style.width = 0 + "px";
});    
        
//  _________@@@@@@@@@@@@@@ Search Button @@@@@@@@@@@@@@_________ 





//  _________@@@@@@@@@@@@@@ Parallax Effect @@@@@@@@@@@@@@_________ 

// let parallax = document.getElementById("parallax");

// window.addEventListener("mousemove",(e)=>{
//     let X = (window.innerWidth - e.clientX) / 30;
//     let Y = (window.innerHeight - e.clientY) / 20;

//     parallax.style.transform = `translateX(${X}px) translateY(${Y}px)`;
// });

//  _________@@@@@@@@@@@@@@ Parallax Effect @@@@@@@@@@@@@@_________




//  _________@@@@@@@@@@@@@@ Canvas particle @@@@@@@@@@@@@@_________

// let partical = document.getElementById("partical");
// let ctx = partical.getContext("2d");

// console.log(ctx);

// ctx.moveTo(500, 10);
// ctx.lineTo(100, 200);
// ctx.stroke();
// ctx.filStyle = "white"

    
// partical.innerHTML = x;


//  _________@@@@@@@@@@@@@@ Canvas particle @@@@@@@@@@@@@@_________



//  @@@@@@@@@@@@@@@@@@@@@@@@ html content @@@@@@@@@@@@@@@@@@@@@@@@

