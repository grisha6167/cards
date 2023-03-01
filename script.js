const slides = document.querySelectorAll(".slide")
console.log(slides)
for(const slide of slides){
    slide.addEventListener("mouseover", () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}
function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}
document.body.addEventListener("click",() => {
    document.body.style.background = "black"}
)
document.body.addEventListener("dblclick",() => {
    document.body.style.background = "red"
}

)