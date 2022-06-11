function triggerLogin(){
	if(typeof window.ethereum !== 'undefined'){
		document.addEventListener('DOMContentLoaded',() => {
			Login()
			.then(() => {
				Connect()
				LoadOnSale()
                LoadEstate()
            })
		})
	}
	else{
		//container.innerHTML = "<h1>Please install a wallet plugin</h1>"
	}
}

triggerLogin()

window.ethereum.on('accountsChanged',function(){window.location.reload()})

