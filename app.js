//  _________@@@@@@@@@@@@@@get code btn@@@@@@@@@@@@@@_________ 

let code_btn = document.querySelectorAll(".code_btn");
let code = document.querySelectorAll(".code");

for(let i=0; i<code_btn.length; i++){

    code_btn[i].addEventListener("click",function(){

        if(code[i].style.display != "block"){
            code[i].style.display = "block";
        }
        else{
            code[i].style.display = "none";
        }

    });

};

//  _________@@@@@@@@@@@@@@get code btn@@@@@@@@@@@@@@_________ 




//  _________get even odd number_________ 

let num1 = [1243,3244];
num1.map((vlu)=>{
    if(vlu%2==0){
        console.log(vlu+" is a even number");
    }
    else{
        console.log(vlu+" is a odd number");
    }
});

//  _________get even odd number_________ 




//  ________sum two number_________ 

let num2 = [232,455];
let sum = num2.reduce((accum,vlu)=>{
    return accum + vlu;
});
console.log(sum);

//  ________sum two number_________




//  ________convert min into sec_________

let date = new Date().getMinutes();
let sec = date * 60
console.log(sec);

//  ________convert min into sec_________




//  ________return the 0-10 integer number_________

let num3 = 0;
let pass = setInterval(() => {
    console.log(num3 ++); 
    if(num3>10){
        clearInterval(pass);
        console.log("finish");
    }
}, 1000);


//  ________return the 0-10 integer number_________




//  ________return the 0-10 integer number_________

let base = 12;
let height = 12;

let Tringle_area = 1/2 * (base * height);
console.log(Tringle_area);

//  ________return the 0-10 integer number_________





//  ________Convert Age to days_________

let bd_year = new Date("03/08/1999").getFullYear();
let today = new Date().getFullYear();
let bd_days = (today - bd_year) * 365;

console.log(bd_days);

//  ________Convert Age to days_________




//  ________Return the first element in an Array_________

let num4 = ["apple","orange","banana","painaple"];
num4[0]= "jackfruit";
let fst_element = num4.shift();

console.log(fst_element);

//  ________Return the first element in an Array_________




//  ________Power Calculator_________

let power = Math.pow(12,2);

console.log(power);

//  ________Power Calculator_________




//  ________Convert Hours into Sec_________

let hours = new Date().getHours();
let sec2 = (hours * 60)* 60 ;

console.log(sec2);

//  ________Convert Hours into Sec_________




//  ________Max edge of a triangle_________

function maxEdge(side1,side2){
    if(side1 < 0 || side2 < 0){
        console.log("plese Enter The positive value");
    }
    else {
        const side3 = (side1 + side2)-1; /* ৩ বাহু অবশ্যই ২ বাহুর সমষ্টি থেকে কম হবে [NB : basic in triangle]*/
        console.log(side3)
    }
}
maxEdge(8,9);

//  ________Max edge of a triangle_________