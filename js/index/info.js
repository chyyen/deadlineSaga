const container = document.querySelector('#document')
const Address = document.querySelector('#Account')
const Balance = document.querySelector('#Balance')

// load self info
async function LoadInfo(){
    Address.innerText = userWalletAccount
    await erc20Contract.balanceOf(userWalletAccount)
        .then((bal) => {
            Balance.innerText = bal.toString()
        })
}

// load estate info
async function LoadEstate(i){
    let est = document.querySelector(`div.box:nth-child(${i+1})`)
    let owner
    let onfire
    let onsale
    // find owner of estate
    await estateContract.ownerOf(i)
        .then(async (res) => { 
            if(res.toLowerCase() == estateContractAddress.toLowerCase()){
                await estateContract.querySaler(i)
                    .then((res) => {
                        onsale = true
                        owner = res
                    })
            }
            else{
                onsale = false
                owner = res
            }
        })
    await estateContract.isFired(i)
        .then((res) => {
            onfire = res
        })
    owner = owner.toString()
    href = "https://kovan.etherscan.io/address/"+owner
    est.innerHTML = `<div id="est${i}">&#x1F3E0<br><a href="${href}" style="text-decoration:none;color:inherit">${owner.substring(0,15)+"..."}</a></div>`
    if(onfire){
        est.innerHTML += "&#x1F525"
    }
    if(onsale){
        est.innerHTML += "&#x1F516"
    }
}

async function LoadAllEstate(){
    for(let i=0; i<45; i++){
        LoadEstate(i)
    }
}