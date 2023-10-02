
import { coinbasepro }			from 'ccxt'
import { config }			from 'dotenv'	; config()	

export let pro = new coinbasepro({
	apiKey:		process.env.COINBASE_PRO_API_KEY,
	secret:		process.env.COINBASE_PRO_SECRET,
	password:	process.env.COINBASE_PRO_PASSWORD
}) 


	let nd		= new Date(1695785075253) 			// '2023-09-27T03:24:35.253Z' <- date of a real transaction
	let ns		= nd.toISOString()
	let since	= pro.parse8601(ns)


let sinceTest = async function() {


	let myTradesNoLimit	= await pro.fetchMyTrades('ETH/USD', since)		// When no limit is specfied, 'since' works
	let myTradesWithLimit	= await pro.fetchMyTrades('ETH/USD', since, 5)	// When a limit is specified, 'since' no longer works

	console.log(ns) 					// <-- ISO format of 'since'
	console.log(myTradesNoLimit[0].datetime)		// <-- Correct: first transaction returned is same as 'since' date  
	console.log(myTradesWithLimit[0].datetime)		// <-- Broken: returned my 5th-most recent transaction


	// console.log(myTradesNoLimit.length)			// <-- 33 transactions since this date
	// console.log(myTradesWithLimit.length)		// <--  5 transactions as expected




	// FWIW:  Same results with fetchOrders
	// let ordersNoLimit	= await pro.fetchOrders('ETH/USD', since)	
	// let ordersWithLimit	= await pro.fetchOrders('ETH/USD', since, 5)	
	// console.log(ns)
	// console.log(ordersNoLimit[0].datetime)
	// console.log(ordersWithLimit[0].datetime)


}
sinceTest()


// Node.js 	19.3.0
// ccxt		4.0.112
