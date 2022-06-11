// Login 
async function Login() {
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	.catch((e) => { 
        console.error(e.message) 
        container.innerHTML = "<h1>Please connect to your wallet.</h1>"
    })
	if (!accounts) { return }
	// set account address
	userWalletAccount = accounts[0]
}

