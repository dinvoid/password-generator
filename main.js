
let pass=document.getElementById("pass");
let slider=document.getElementById("slider");
let sliderAmount=document.getElementById("sliderAmount");

let number="1234567890";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let uppercase="ABCDEFGHIJKLNOPQRSTUVWXYZ";
let symbol="@#!&_*%$";
let randomPassword='';

let up=document.getElementById("uppercase");
let low=document.getElementById("lowercase");
let num=document.getElementById("number");
let sym=document.getElementById("symbol");


function updateSlider(slideAmount) {
        sliderAmount.innerHTML = slideAmount;
    }

function generateRandom(data){
return data[Math.floor(Math.random() *data.length)];
}

document.getElementById("button").addEventListener('click',
	function filterPassword(){
	let error=document.getElementById("error");

	  for(let i=0;i<slider.value;i++){
		if(!up.checked && !low.checked&& !num.checked&& !sym.checked){
			error.classList.add("showerror");
			error.innerHTML="Please select at least one";
			
		}
		if(up.checked){	
			randomPassword+=generateRandom(uppercase);
			error.classList.remove("showerror");
			error.innerHTML="";

			
		}
		if(low.checked){	
			randomPassword+=generateRandom(lowercase);
			error.classList.remove("showerror");
			error.innerHTML="";
		}
		if(num.checked){	
			randomPassword+=generateRandom(number);
			error.classList.remove("showerror");
			error.innerHTML="";
		}
		if(sym.checked){	
			randomPassword+=generateRandom(symbol);		
			error.classList.remove("showerror"); 	
			error.innerHTML="";
	    }

	     createFinalPassword();
    }

});
// create random password after the validation
function createFinalPassword(){
  	let chars = randomPassword;
    let randomstring = '';

    for(let i=0;i<slider.value;i++){
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);      
    }
        pass.innerHTML=randomstring;      
}
        
//deete the text 
document.getElementById("delete").addEventListener('click',function clear(){
		pass.innerHTML="";
		randomPassword='';
});

//copy the text
document.getElementById("copy").addEventListener('click',function clear(){
		let copyText=document.getElementById('pass').textContent;
         navigator.clipboard.writeText(copyText);
         if(!randomPassword==''){
          alert(" Text Copied");
      }
});
  


