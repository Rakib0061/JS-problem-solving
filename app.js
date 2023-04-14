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

nav_search_btn.addEventListener("mouseenter",()=>{
        input_Search.style.display = "block";
        input_Search.style.width = 150 + "px";
        // input_Search.classList.add("active");
    });
nav_search_btn.addEventListener("click",()=>{
    input_Search.style.display = "none";
    input_Search.style.width = 0 + "px";
    // input_Search.classList.remove("active");
});    
        
//  _________@@@@@@@@@@@@@@ Search Button @@@@@@@@@@@@@@_________ 





//  _________@@@@@@@@@@@@@@ Parallax Effect @@@@@@@@@@@@@@_________ 

let parallax = document.getElementById("parallax");

window.addEventListener("mousemove",(e)=>{
    let X = (window.innerWidth - e.clientX) / 30;
    let Y = (window.innerHeight - e.clientY) / 20;

    parallax.style.transform = `translateX(${X}px) translateY(${Y}px)`;
});

//  _________@@@@@@@@@@@@@@ Parallax Effect @@@@@@@@@@@@@@_________ 
