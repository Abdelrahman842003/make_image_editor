let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let bridhtnees = document.getElementById("bridhtnees");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur1 = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");



let upload = document.getElementById("upload");

let img = document.getElementById("img");
let imgBox = document.querySelector(".img-box");

let reset = document.querySelector("span");



// function remove (reset , imgBox) on reload 
window.onload = () => {


    reset.style.display = "none";
    imgBox.style.display = "none";
}
// function upload and add img
upload.onchange = () => {


    reset.style.display = "block"
    imgBox.style.display = "block"

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () => {
        img.src = file.result;
    }
    resetValue()
}
//function (filtters) of image
let filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {
    filter.addEventListener("input", function () {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${bridhtnees.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur1.value}px)
            hue-rotate(${hueRotate.value}deg)   
        `
    })
})

function resetValue() {
    img.style.filter = "none"
    statusbar.value = '100'
    contrast.value = '100'
    bridhtnees.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur1.value = '0'
    hueRotate.value = '0'
}

