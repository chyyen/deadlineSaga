function Connect(){
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    estateContract = new ethers.Contract(estateContractAddress, estateContractABI, provider)
    estateContract_write = new ethers.Contract(estateContractAddress, estateContractABI, signer)
    insuranceContract = new ethers.Contract(insuranceContractAddress, insuranceContractABI, provider)
    insuranceContract_write = new ethers.Contract(insuranceContractAddress, insuranceContractABI, signer)
    erc20Contract = new ethers.Contract(erc20ContractAddress, erc20ContractABI, provider)
    erc20Contract_write = new ethers.Contract(erc20ContractAddress, erc20ContractABI, signer)
}