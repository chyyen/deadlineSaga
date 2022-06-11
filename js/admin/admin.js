function triggerLogin(){
	if(typeof window.ethereum !== 'undefined'){
		document.addEventListener('DOMContentLoaded',() => {
			Login()
			.then(() => {
				if(userWalletAccount.toLowerCase() != admin.toLowerCase()){
                    alert("You are not admin")
                    window.location = "./index.html"
				}
				console.log('ok')
				Connect()
				LoadOption()
			})
		})
	}
	else{
		//container.innerHTML = "<h1>Please install a wallet plugin</h1>"
	}
}

triggerLogin()

window.ethereum.on('accountsChanged',function(){window.location.reload()})

