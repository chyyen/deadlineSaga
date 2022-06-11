async function buildInsurance(target, beneficiary, premiums, benefit){
    // find owner
    let Insured 
    await estateContract.ownerOf(target)
        .then(async (res) => { 
            if(res.toLowerCase() == estateContractAddress.toLowerCase()){
                await estateContract.querySaler(target)
                    .then((res) => {
                        Insured = res
                    })
            }
            else{
                Insured = res 
            }
        })

    // send transaction
    console.log(Insured)
    console.log(beneficiary)
    console.log(parseInt(target))
    console.log(premiums)
    console.log(benefit)

    approve = await erc20Contract_write.approve(insuranceContractAddress, parseInt(benefit*1.1))
    document.querySelector('#container').innerHTML = "<h1>Please wait ...</h1>"
    await approve.wait()    
        .then(async () => {
            tx = await insuranceContract_write.buildInsurance(
                Insured,
                beneficiary, 
                "0x9743612FF7767079F2CB16ffE7D064f9495a7467", 
                parseInt(target),
                premiums,
                benefit,
                86400
            ).then(() => { alert("Success") })
            .catch((e) => { console.error(e) })
        }).catch((e) => {
            console.log('check')
            console.error(e)
        }).finally(() => {
            window.location.reload()
        })
}