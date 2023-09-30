import { log }				from 'console'
import { coinbasepro }			from 'ccxt'
import { config }			from 'dotenv'	; config()	



export let pro = new coinbasepro({
	apiKey:		process.env.COINBASE_PRO_API_KEY,
	secret:		process.env.COINBASE_PRO_SECRET,
	password:	process.env.COINBASE_PRO_PASSWORD
}) 

 


let sinceTest = async function() {

	let foo


	let	symbol	= undefined
		symbol	= 'ETH/USD'
	let	since	= pro.parse8601 ('2018-01-01T00:00:00Z')	
		since	= 1514764800000		
	let	until	= pro.parse8601 ('2018-01-01T00:00:00Z')		
		until	= 1514764800000	
	let	params	= { since : 1514764800000, until : 1514764800000}

	

	foo		= await pro.fetchOrders(symbol, since)		
	// foo		= await pro.fetchOrders('ETH/USD', since)
	// foo		= await pro.fetchOrders(symbol, since, 1000)	
	// foo		= await pro.fetchOrders('ETH/USD', since, 1000)			

	// foo		= await pro.fetchOrders(symbol, 1514764800000)							
	// foo		= await pro.fetchOrders('ETH/USD', 1514764800000)			
	// foo		= await pro.fetchOrders(symbol, since = 1514764800000)					
	// foo		= await pro.fetchOrders('ETH/USD', since = 1514764800000)				

	// foo		= await pro.fetchOrders(symbol, until)									
	// foo		= await pro.fetchOrders('ETH/USD', until)								
	// foo		= await pro.fetchOrders(symbol, until = 1514764800000)					
	// foo		= await pro.fetchOrders('ETH/USD', until = 1514764800000)				
	// foo		= await pro.fetchOrders('ETH/USD', 1514764800000)						 
						



	// foo		= await pro.fetchMyTrades('ETH/USD')										
	// foo		= await pro.fetchMyTrades('ETH/USD', since)									
	// foo		= await pro.fetchMyTrades('ETH/USD', since = 1514764800000)					
	
	
	// foo		= await pro.fetchLedger('ETH')						
	// foo		= await pro.fetchLedger('ETH', since)				
	

	

	log(foo[999].datetime) 
	// log(foo.length) 

}
sinceTest()


// Node.js 	19.3.0
// ccxt		4.0.111
