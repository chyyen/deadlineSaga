async function SaleEstate(id, price){
    await estateContract_write.sale(id, price)
        .then(() => { alert("Success") })
        .catch((e) => { console.log(e) })
        .finally(() => { window.location.reload() })
}

async function UnSaleEstate(id){
    await estateContract_write.unSale(id)
        .then(() => { alert("Success") })
        .catch((e) => { console.log(e) })
        .finally(() => { window.location.reload() })
}