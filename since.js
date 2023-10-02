
import { coinbasepro }			from 'ccxt'
import { config }			from 'dotenv'	; config()	

export let pro = new coinbasepro({
	apiKey:		process.env.COINBASE_PRO_API_KEY,
	secret:		process.env.COINBASE_PRO_SECRET,
	password:	process.env.COINBASE_PRO_PASSWORD
}) 


	let nd		= new Date(1695785075253) 				// '2023-09-27T03:24:35.253Z' <- date of a real transaction
	let ns		= nd.toISOString()
	let since	= pro.parse8601(ns)


let sinceTest = async function() {


	// Part 1:   
	
	// 'Since' works if you don't specify a limit.
	let myTradesNoLimit	= await pro.fetchMyTrades('ETH/USD', since)	//  no limit is specfied; 'since' works
	let myTradesWithLimit	= await pro.fetchMyTrades('ETH/USD', since, 5)	// limit is specified; 'since' no longer works

	console.log(ns) 							// <-- ISO format of 'since'
	console.log(myTradesNoLimit[0].datetime)				// <-- Correct: first transaction returned is same as 'since' date  
	console.log(myTradesWithLimit[0].datetime)				// <-- Broken: returned my 5th-most recent transaction

	// console.log(myTradesNoLimit.length)					// <--   33 transactions since this date
	// console.log(myTradesWithLimit.length)				// <--    5 transactions as expected

	// FWIW:  Same results with fetchOrders
	// let ordersNoLimit	= await pro.fetchOrders('ETH/USD', since)	
	// let ordersWithLimit	= await pro.fetchOrders('ETH/USD', since, 5)	
	// console.log(ns)
	// console.log(ordersNoLimit[0].datetime)
	// console.log(ordersWithLimit[0].datetime) 



	// Part 2:  
	
	// 'since' works with old dates, as long at there are less than 1000 results returned
	let date2YearsAgo	= new Date(Date.now() - (2 * 12 * 30.43 * 24 * 60 * 60 * 1000))
	let since2		= pro.parse8601(date2YearsAgo.toISOString())
	let myTrades2YearsAgo	= await pro.fetchMyTrades('ETH/USD', since2)
	
	// console.log(myTrades2YearsAgo.length)				// <--  765 transactions 
	// console.log(myTrades2YearsAgo[0].datetime)				// <--  '2021-12-29T03:09:26.037Z'

	// If there are more than 1000 results, 'since' stops working
	let date3YearsAgo	= new Date(Date.now() - (2 * 12 * 30.43 * 24 * 60 * 60 * 1000))
	let since3		= pro.parse8601(date3YearsAgo.toISOString())
	let myTrades3YearsAgo	= await pro.fetchMyTrades('ETH/USD', since3)
	
	// console.log(myTrades3YearsAgo.length)				// <-- 1000 transactions 
	// console.log(myTrades3YearsAgo[myTrades3YearsAgo.length -1].datetime)	// <-- '2023-10-01T17:47:02.831Z', today








}
sinceTest()


// Node.js 	19.3.0
// ccxt		4.0.112
