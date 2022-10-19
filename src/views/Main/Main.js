import React from 'react';
import Web3 from 'web3';
import {useWeb3React} from "@web3-react/core";
import {ethers} from 'ethers';
import axios from 'axios';

const bnbweb3 = new Web3('https://bsc-dataseed.binance.org/');
const maticweb3 = new Web3('https://rpc-mainnet.maticvigil.com/');
const ftmweb3 = new Web3('https://rpc.ftm.tools/');
const avaxweb3 = new Web3('https://api.avax.network/ext/bc/C/rpc');




export default function Main(){
	const {formatEther} = ethers.utils;
	const {account, library, chainId} = useWeb3React();
	const [ethBalance, setEthBalance] = React.useState();
	const [bnbBalance, setBnbBalance] = React.useState();
	const [maticBalance, setMaticBalance] = React.useState();
	const [ftmBalance, setFtmBalance] = React.useState();
	const [avaxBalance, setAvaxBalance] = React.useState();

	const [currentrate, setRate] = React.useState();
	  React.useEffect(() => {
	    if (library && account) {
	      let stale = false;
	      bnbweb3.eth.getBalance(account).then(balance =>{
			setBnbBalance(balance);
			console.log("---bnb balance",parseFloat(formatEther(balance)).toPrecision(4))
		  }).catch(()=>{
		  	console.log("There's something wrong,");
		  })
		  maticweb3.eth.getBalance(account).then(balance =>{
			setMaticBalance(balance);
			console.log("---bnb balance",parseFloat(formatEther(balance)).toPrecision(4))
		  }).catch(()=>{
		  	console.log("There's something wrong,");
		  })
		  ftmweb3.eth.getBalance(account).then(balance =>{
			setFtmBalance(balance);
			console.log("---bnb balance",parseFloat(formatEther(balance)).toPrecision(4))
		  }).catch(()=>{
		  	console.log("There's something wrong,");
		  })
		  avaxweb3.eth.getBalance(account).then(balance =>{
			setAvaxBalance(balance);
			console.log("---bnb balance",parseFloat(formatEther(balance)).toPrecision(4))
		  }).catch(()=>{
		  	console.log("There's something wrong,");
		  })

	      library
	        .getBalance(account)
	        .then(balance => {
	          if (!stale) {
	          	console.log(balance)
	            setEthBalance(balance);
	          }
	        })
	        .catch(() => {
	          if (!stale) {
	            setEthBalance(null);
	          }
	        });

	      return () => {
	        stale = true;
	        setEthBalance(undefined);
	      };
	    }
	  }, [library, account, chainId]);

	return(
		<div>
			{/*<h5 className="balance-text">Total Amount: <span>{ethBalance === undefined ? "..." : ethBalance === null ? "Error" : `${parseFloat(formatEther(ethBalance)).toPrecision(4)}`}</span></h5>*/}
			<h5 className="balance-text">ETH:
				<span>{ethBalance === undefined ? "..." : ethBalance === null ? "Error" : `${parseFloat(formatEther(ethBalance)).toPrecision(4)}`}
	            </span>
            </h5>
            <h5 className="balance-text">BNB:
				<span>{bnbBalance === undefined ? "..." : bnbBalance === null ? "Error" : `${parseFloat(formatEther(bnbBalance)).toPrecision(4)}`}</span>
            </h5>
            <h5 className="balance-text">MATIC:
				<span>{maticBalance === undefined ? "..." : maticBalance === null ? "Error" : `${parseFloat(formatEther(maticBalance)).toPrecision(4)}`}</span>
            </h5>
            <h5 className="balance-text">FTM:
				<span>{ftmBalance === undefined ? "..." : ftmBalance === null ? "Error" : `${parseFloat(formatEther(ftmBalance)).toPrecision(4)}`}</span>
            </h5>
            <h5 className="balance-text">AVAX:
				<span>{avaxBalance === undefined ? "..." : avaxBalance === null ? "Error" : `${parseFloat(formatEther(avaxBalance)).toPrecision(4)}`}</span>
            </h5>
		</div>
		)
}