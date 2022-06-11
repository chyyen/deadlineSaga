async function LoadToCheck(){
    // get insurance
    list_tmp = null
    await insuranceContract.queryGuarantorToId(userWalletAccount)
        .then((list) => {
            list_tmp = list
        })

    // filter checked
    toCheck = document.querySelector('#toCheck')
    toCheck.innerHTML = ""

    list_tmp.forEach(async (element) => {
        let id = parseInt(element.toString())
        console.log(id)
        await insuranceContract.isExist(id)
            .then(async (res) => {
                console.log(res, id)
                if(res == true){
                   await insuranceContract.queryGetPaid(id)
                        .then(async (res1) => {
                            console.log(res1, id)
                            if(res1 == false){
                                // query insurance content
                                let getmoney = id
                                let pre = id
                                let money = id
                                let est = id
                                let validator = id

                                await insuranceContract.queryBeneficiary(id).then((res3) => { getmoney =  res3 })
                                await insuranceContract.querySoldPrice(id).then((res3) => {  pre = res3 })
                                await insuranceContract.querySumInsured(id).then((res3) => { money = res3 })
                                await insuranceContract.queryInsuredTarget(id).then((res3) => { est = res3 })
                                await insuranceContract.queryValidator(id).then((res3) => { validator = res3 })
                                console.log(est)
                                toCheck.innerHTML += `<div style="padding-bottom:10px;border-bottom:1px solid black"> <form>Insured estate : ${est} <br> Beneficiary: ${getmoney} <br> Premiums: ${pre} <br> Benefit: ${money} <br> Validator: ${validator}</form> <button onclick="PayInsurance(${id}, ${pre})">Pay</button> </div>`
                            }
                        })
                }
            })
    })
}


async function LoadToValidate(){
    // get insurance
    list_tmp = null
    await insuranceContract.queryValidatorToId(userWalletAccount)
        .then((list) => {
            list_tmp = list
        })
    toValidate = document.querySelector('#toValidate')
    toValidate.innerHTML = ""
    // filter checked
    List = []
    list_tmp.forEach(async (element) => {
        let id = parseInt(element.toString())
        console.log(id)
        await insuranceContract.isExist(id)
            .then(async (res) => {
                console.log(res)
                if(res == true){
                    await insuranceContract.queryGetPaid(id)
                        .then(async (res1) =>{
                            console.log(res1)
                            if(res1 == true){
                                let est = id
                                let pre = id
                                let money = id

                                await insuranceContract.queryInsuredTarget(id).then((res3) => { est =  res3 })
                                await insuranceContract.querySoldPrice(id).then((res3) => {  pre = res3 })
                                await insuranceContract.querySumInsured(id).then((res3) => { money = res3 })
                                await estateContract.isFired(est)

                                .then(async (res2) => {
                                    console.log(res2)
                                    if(res2 == true){
                                        toValidate.innerHTML += `<div style="padding-bottom:10px;border-bottom:1px solid black"><form>Estate: ${est} <br> Premiums: ${pre} <br> Benefit: ${money} </form> <button onclick="TriggerInsurance(${id})">Trigger</button></div>`
                                    }                                    
                                })
                            }
                        })
                }
            })
    })
}