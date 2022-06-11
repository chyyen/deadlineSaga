async function LoadOnSale(){
    EstList = document.querySelector('#OnSale')
    
    List = []
    for(let i=0; i<3 ;i++){
        await estateContract.querySaler(i)
            .then(async (res) => {
                if(res.toLowerCase() != userWalletAccount.toLowerCase() && res.toLowerCase() != emptyAddress){
                    await estateContract.queryPrice(i)
                        .then((res) => {
                            EstList.innerHTML += `<div style="padding-bottom:10px;border-bottom:1px solid black"><form>Estate : ${i} <br> Price: ${parseInt(res.toString())}</form><button onclick="BuyEstate(${i})">Buy</button></div>`
                        })
                }
            })
    }
}


async function LoadEstate(){
    est = document.querySelector('#Estate') 
    OSest = document.querySelector('#OnSaleEstate')
    for(let i=0; i<3; i++){
        console.log(typeof(i))
        id = i
        console.log(id)
        await estateContract.ownerOf(id)
            .then((res) => {
                console.log(res)
                if(res.toLowerCase() == userWalletAccount.toLowerCase()){
                    est.innerHTML += `<option value="${id}">${id}</option>`
                }
            })
        await estateContract.querySaler(id)
            .then((res) => {
                console.log(res)
                if(res.toLowerCase() == userWalletAccount.toLowerCase()){
                    OSest.innerHTML += `<option value="${id}">${id}</option>`  
                }
            })
    }
}

