function triggerLogin(){
	if(typeof window.ethereum !== 'undefined'){
		document.addEventListener('DOMContentLoaded',() => {
			Login()
			.then(() => {
				Connect()
				LoadToCheck()
				LoadToValidate()
			})
		})
	}
}

triggerLogin()

window.ethereum.on('accountsChanged',function(){window.location.reload()})