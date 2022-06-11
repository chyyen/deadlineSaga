function triggerLogin(){
	if(typeof window.ethereum !== 'undefined'){
		document.addEventListener('DOMContentLoaded',() => {
			Login()
			.then(() => {
				Connect()
				LoadInfo()
				LoadTransactionMessage()
				LoadAllEstate()
			})
		})
	}
	else{
		//container.innerHTML = "<h1>Please install a wallet plugin</h1>"
	}
}

triggerLogin()

// listen on status changed
window.ethereum.on('accountsChanged',function(){window.location.reload()})
window.ethereum.on('chainChanged',function(){window.location.reload()})