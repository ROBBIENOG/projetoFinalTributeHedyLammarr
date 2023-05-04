const imgs = document.getElementById("carrossel__img");
const img = document.querySelectorAll("#carrossel__img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
    	idx =0;
    }
}

imgs.style.transform = translateX($[-idx * 500],px);

setInterval(carrossel,1800);


