async function PayInsurance(id, price){
    approve = await erc20Contract_write.approve(insuranceContractAddress, parseInt(price*1.1))
    document.querySelector('#container').innerHTML = "<h1>Please wait ... </h1>"
    await approve.wait()
        .then(async () => {
                await insuranceContract_write.pay(id)
                    .then(() => { alert("Success") })
                    .catch((e) => { console.error(e) })
                    .finally(() => { window.location.reload() })
        })
}