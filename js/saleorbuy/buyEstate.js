async function BuyEstate(id){
    let price
    await estateContract.queryPrice(id)
        .then((res) => { price = parseInt(res) })

    approve = await erc20Contract_write.approve(estateContractAddress, price)
    document.querySelector('#container').innerHTML = "<h1>Please wait ... </h1>"
    await approve.wait()
        .then(async () => {
            await estateContract_write.buy(id)
                .then(() => { alert("Success") })
                .catch((e) => { console.error(e) })
        }).catch((e) => {
            console.log('check')
            console.error(e)
        })
        .finally(() => {
            window.location.reload()
        })
}
