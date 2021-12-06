var btnsSlider = document.querySelectorAll(".btn");
let sliderBigDiv = document.querySelector(".slider-big-div");
let InDIV = document.querySelectorAll(".in-div");
InDIV.forEach(function(val){
    for(let i=1;i<val.children.length;i++){
        val.children[i].classList.add("display-none");
    }
});
let count = 0;
var bool = false;
function rand(){
    return Math.floor(Math.random() * 5);
}
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
        blah.src = URL.createObjectURL(file);
        var img = document.createElement('IMG');
        img.src = URL.createObjectURL(file);
        for(let i =0; i < InDIV.length;i++){
            if(count !==0){
                InDIV[i].insertAdjacentHTML("afterBegin",`<img class = "display-none" src = "${URL.createObjectURL(file)}" alt = "nkar"/>`);
                continue;
            }
            InDIV[i].insertAdjacentHTML("afterBegin",`<img src = "${URL.createObjectURL(file)}" alt = "nkar"/>`);
        }
        // if(count !== 0){
        //     alert("asdasd");
        //     img.classList.add("display-none");
        //     return;
        // }
        if(count === 0){
            InDIV.forEach(function(val){
                for(let i=1;i<val.children.length;i++){
                    val.children[i].classList.add("display-none");
                }
            });
        }
        bool = true;
    }
}
function forAnimation(){
    sliderBigDiv.children[0].classList.toggle("first-animation");
    sliderBigDiv.children[1].classList.toggle("second-animation");
    sliderBigDiv.children[2].classList.toggle("third-animation");
    sliderBigDiv.children[3].classList.toggle("forth-animation");
    sliderBigDiv.children[4].classList.toggle("fifth-animation");
    sliderBigDiv.children[5].classList.toggle("sixth-animation");
    sliderBigDiv.children[6].classList.toggle("seventh-animation");
    sliderBigDiv.children[7].classList.toggle("eigth-animation");
    sliderBigDiv.children[8].classList.toggle("ninth-animation");
}
function a(){
    InDIV.forEach(function(val){
            val.children[count].classList.add("display-none");
            val.children[count+1].classList.remove("display-none");
        });
        count++
        return;
}
function forSliderNext(){
    // btnsSlider[0].classList.add("cursor-none");
    // btnsSlider[1].classList.add("cursor-none");
     let randed = rand();
     console.log(randed + " random");
    if(bool){
        count++;
        bool = false;
    }
     if(count ===  InDIV[0].children.length - 1){return;}
     if(randed === 0){
        forAnimation();
        setTimeout(forAnimation,3500);
     }
     else if(randed === 1){
        sliderBigDiv.classList.add("animation-for-big-first");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-first");
        },3500);
     }
     else if(randed === 2){
        sliderBigDiv.classList.add("animation-for-big-second");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-second");
        },3000);
     }
     else if(randed === 3){
        sliderBigDiv.classList.add("animation-for-big-third");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-third");
        },3000);
     }
     else{
        sliderBigDiv.classList.add("animation-for-big-forth");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-forth");
        },3000);
     }
    setTimeout(()=>{
        InDIV.forEach(function(val){
            val.children[count].classList.add("display-none");
            val.children[count+1].classList.remove("display-none");
        });
        count++;
        console.log(count + " next");
    },1500);
    // setTimeout(()=>{
    //     btnsSlider[0].classList.remove("cursor-none");
    //     btnsSlider[1].classList.remove("cursor-none");
    // },3500);
}
function forSliderPrev(){
    // btnsSlider[0].classList.add("cursor-none");
    // btnsSlider[1].classList.add("cursor-none");
    let randed = rand();
    console.log(randed + " random");
    if(bool){
        count++;
        bool = false;
    }
    if(count ===  0){return;}
    if(randed === 0){
        forAnimation();
        setTimeout(forAnimation,3500);
     }
     else if(randed === 1){
        sliderBigDiv.classList.add("animation-for-big-first");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-first");
        },3500);
     }
     else if(randed === 2){
        sliderBigDiv.classList.add("animation-for-big-second");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-second");
        },3000);
     }
     else if(randed === 3){
        sliderBigDiv.classList.add("animation-for-big-third");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-third");
        },3000);
     }
     else{
        sliderBigDiv.classList.add("animation-for-big-forth");
        setTimeout(()=>{
            sliderBigDiv.classList.remove("animation-for-big-forth");
        },3000);
     }
    setTimeout(()=>{
        InDIV.forEach(function(val){
            val.children[count].classList.add("display-none");
            val.children[count - 1].classList.remove("display-none");
        });
        count--;
        console.log(count + " prev");
    },1500);
    // setTimeout(()=>{
    //     btnsSlider[0].classList.remove("cursor-none");
    //     btnsSlider[1].classList.remove("cursor-none");
    // },3550);
}