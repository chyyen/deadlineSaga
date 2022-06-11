const transactionMessages = document.querySelector('#tansactionMessages')

async function LoadTransactionMessage(){
    // print latest events
    block = await provider.getBlockNumber()
    
    // listen on events
    estateContract.on("tradeMaded", (from, to, price, tokenId) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black"> ${to} buy ${tokenId} from ${from} <br> Amount : ${price.toString()} </p>`
        LoadEstate(parseInt(tokenId.toString()))
    })
    estateContract.on("onSaleEvent", (saler, tokenId, price) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black"> ${tokenId} is now on sale<br> Amount : ${price}</p>`
        LoadEstate(parseInt(tokenId.toString()))
    })
    estateContract.on("unSaleEvent", (tokenId) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black">Estate ${tokenId} is now not for sale</p>`
        LoadEstate(parseInt(tokenId.toString()))
    })
    estateContract.on("getFireEvent", (tokenId) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black"> ${tokenId} is on fire</p>`
        LoadEstate(parseInt(tokenId.toString()))
    })
    insuranceContract.on("guarantorPaid", (guarantor, insuredTargetTokenId, sumInsured, insuranceId) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black"> ${guarantor} build a insurance on estate ${insuredTargetTokenId}</p>`
    })
    insuranceContract.on("triggerInsurance", (insurer, guarantor, beneficiary, insuredTargetTokenId, sumInsured, triggerTime, sumInsuredPercentage) => {
        transactionMessages.innerHTML += `<p style="border-bottom:1px solid black">A insurance on estate ${tokenId} is triggered,<br>${beneficiary} get ${sumInsured}</p>`
        LoadEstate(parseInt(insuredTargetTokenId.toString()))
    })
    erc20Contract.on("Transfer",async (from, to, amount) => {
        if(to.toLowerCase() == userWalletAccount.toLowerCase()){
            await erc20Contract.balanceOf(userWalletAccount)
                .then((bal) => {
                    Balance.innerText = bal.toString()
                })
                .catch((e) => {console.error(e)})
        }
    })
}
