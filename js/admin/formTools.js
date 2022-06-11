// triggered when range bar is changed
function updateRangeValue(id, val){
	document.querySelector(`#${id}`).innerText = val.toString()
}

//Load insured target
function LoadOption(){
	opt = document.querySelector('#opt')
	for(let i=0; i<45; i++){
		opt.innerHTML += `<option value=${i}>${i}</option>`
	}
}

// restirct max value of range input 
async function RestrictBenefit(){
	ben = document.querySelector('#Benefit')
	await erc20Contract.balanceOf(userWalletAccount)
		.then((res) => {
			ben.max = res.toString()
		})
}