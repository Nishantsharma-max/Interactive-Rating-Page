let rateBtn=document.querySelectorAll(".rate");   
let prate=document.querySelector(".prate");   
let btn=document.querySelector("button")
let circle=document.querySelector(".circle")
let parent=document.querySelector(".parent")
let h3=document.querySelector("h3")
let p=document.querySelector("p")
let displayRate=document.createElement("p")


for (let el of rateBtn) {
     el.onclick=(event)=>{
          for (let el of rateBtn){
               el.style.backgroundColor="rebeccapurple"
          }
          el.style.backgroundColor="gold"
          displayRate.innerText=`You selected ${el.innerText} out of 5`
     }
}



let img=document.createElement("img")
img.setAttribute("src","img.png")
img.classList.toggle("img")

btn.addEventListener("click",()=>{
     parent.style.backgroundColor="#1f252e"
     circle.remove()
     prate.remove()
     btn.remove()
     parent.prepend(img)
     img.insertAdjacentElement("afterend",displayRate)
     displayRate.classList.add("disrate")
     h3.innerText="Thank you!"
     h3.setAttribute("style","margin-left:40px")
     p.innerText="We appreciate you taking the time to give a rating.if you ever need more support.don't hesitate to get in touch!"
     p.style.textAlign="center"
     p.style.marginRight="15px"
})