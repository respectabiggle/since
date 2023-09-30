import { log }			from 'console'
import { coinbasepro }			from 'ccxt'
import { config }			from 'dotenv'	; config()	



export let pro = new coinbasepro({
	apiKey:		process.env.COINBASE_PRO_API_KEY,
	secret:		process.env.COINBASE_PRO_SECRET,
	password:	process.env.COINBASE_PRO_PASSWORD
})




let sinceTest = async function() {


	let symbol	= undefined
	let since	= pro.parse8601 ('2018-01-01T00:00:00Z')			// 1514764800000		
	let params	= { since : 1514764800000 }
	let foo

	 
	foo		= await pro.fetchOrders(symbol, since)			// 2021-04-18T02:58:10.640Z (symbol == undefined)
	foo		= await pro.fetchOrders('ETH/USD', since)			// 2021-04-17T07:26:33.917Z 
	// foo		= await pro.fetchOrders('ETH/USD', params)			// []
	
	 

	foo		= await pro.fetchMyTrades('ETH/USD')			// 2021-05-27T19:27:08.517Z		
	foo		= await pro.fetchMyTrades('ETH/USD', since)				// 2021-05-27T19:27:08.517Z confirmed	
	

	
	foo		= await pro.fetchLedger('ETH')			// 2021-06-04		
	foo		= await pro.fetchLedger('ETH', since)			// 2021-06-04		
	// foo		= await pro.fetchLedger('ETH', params)			// []		
	

	log(foo[0].datetime) 

}
sinceTest()


// Node.js 	19.3.0
// ccxt		4.0.109
