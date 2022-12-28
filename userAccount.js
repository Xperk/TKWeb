const aInfo=document.getElementById("a-info");
const aBought=document.getElementById("a-bought");

const infoContainer=document.querySelector(".info-main-container");
const boughtContainer=document.querySelector(".bought-main-container");

const containerArr=[];
containerArr.push(infoContainer);
containerArr.push(boughtContainer);

const btnArr=[];
btnArr.push(aInfo);
btnArr.push(aBought);

btnArr.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        removeActive();
        btn.classList.add("active");
        if(btn==aInfo){
            if(!infoContainer.classList.contains("activated"))
                infoContainer.classList.add("activated");
        }
        else if(btn===aBought){
            if(!boughtContainer.classList.contains("activated"))
                boughtContainer.classList.add("activated");
        }
    })
})

function removeActive(){
    btnArr.forEach((btn)=>{
        btn.classList.remove("active");
    })
    containerArr.forEach((container)=>{
        container.classList.remove("activated");
    })
}
