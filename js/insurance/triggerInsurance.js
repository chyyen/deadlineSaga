async function TriggerInsurance(id){
    await insuranceContract_write.triggerCompensation(id, 100)
        .then(() => { alert("Success") })
        .catch((e) => { console.error(e) })
        .finally(() => { window.location.reload() })
}