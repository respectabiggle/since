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

	// let	since	= pro.parse8601 ('2018-01-01T00:00:00Z')	
	// let	since	= 1514764800000	// '2018-01-01T00:00:00Z'	
	// let	since	= 1422377048000	// real date of early transaction
	
// newer Attempts
	// let	since	= 1690910729000 // '2023-08-01T17:25:29.000Z' recent date for testing with limits
	// let	string	= new Date(since).toISOString()
	// 		since	= pro.parse8601 (string)

	let 	nd		= new Date(1690910729000)
	let 	since	= pro.parse8601 (nd.toISOString())


	foo		= await pro.fetchOrders('ETH/USD', since, 10)

	// foo		= await pro.fetchOrders(symbol, since)		
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
		

	log(foo[0].datetime) 
	// log(foo.length) 



	// Works, credit to @Aten
	// const someTimeAgo = new Date(Date.now() - (240 * 60 * 60 * 1000))
	// since = pro.parse8601(someTimeAgo.toISOString())
	// const btc_ohlcv = await pro.fetch_ohlcv('BTC/USDT', '1m', someTimeAgo.getTime())
	// let btcDate = new Date(btc_ohlcv[0][0])
	// log(someTimeAgo, btcDate)


}
sinceTest()


// Node.js 	19.3.0
// ccxt		4.0.112
