const aInfo=document.getElementById("a-info");
const aOrders=document.getElementById("a-orders");
const aAccounts=document.getElementById("a-accounts");
const aProducts=document.getElementById("a-products");
const logOut=document.getElementById("log-out");

const infoContainer=document.querySelector(".info-main-container");
const ordersContainer=document.querySelector(".orders-main-container");
const accountsContainer=document.querySelector(".accounts-main-container");
const productsContainer=document.querySelector(".products-main-container");


const containerArr=[];

containerArr.push(infoContainer);
containerArr.push(ordersContainer);
containerArr.push(accountsContainer);
containerArr.push(productsContainer);



const btnArr=[];

btnArr.push(aInfo);
btnArr.push(aOrders);
btnArr.push(aAccounts);
btnArr.push(aProducts);
btnArr.push(logOut);

btnArr.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        removeActive();
        btn.classList.add("active");
        if(btn==aInfo){
            if(!infoContainer.classList.contains("activated"))
                infoContainer.classList.add("activated");
        }
        else if(btn===aOrders){
            if(!ordersContainer.classList.contains("activated"))
                ordersContainer.classList.add("activated");
        }
        else if(btn===aAccounts){
            if(!accountsContainer.classList.contains("activated"))
            accountsContainer.classList.add("activated");
        }
        else if(btn===aProducts){
            if(!productsContainer.classList.contains("activated"))
                productsContainer.classList.add("activated");
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