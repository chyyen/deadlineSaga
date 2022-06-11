async function command(cmd){
    msg = document.querySelector('#msg')

    const cmds = cmd.split(' ')
    console.log(cmds.length)
    cmds.forEach((x) => {
        console.log(x)
    })
    if(cmds.length==2 && cmds[0].toLowerCase()=='setfire' && parseInt(cmds[1])<45){
        await estateContract_write.setFire(parseInt(cmds[1]))
            .then(() => { alert("Success") })
            .catch((e) => { console.error(e) })
    }
    else{
        msg.innerText = 'Command not found'
    }
}