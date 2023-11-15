require('dotenv').config()

const pgPromise = require('./pg-promise')

exports.error = async (req) => {
	var results = []
	await pgPromise.db.none('insert into prod.pg_logger (level_t,message_t,meta_t,route_name_t,route_function_t,route_function_sub_t,url_t,req_t,user_ip,user_ua,aud_src_t) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', ['Error',req.message,req.meta,req.routeName,req.routeFunction,req.routeFunctionSub,req.url,req.req,req.userIP,req.userUA,'DomainName.tld'])
		.then(data => {
			results.push({status: 'pass'})
		})
		.catch(error => {
			results.push({status: 'fail', error: error})
		})

	return results
}

exports.info = async (req) => {
	var results = []
	await pgPromise.db.none('insert into prod.pg_logger (level_t,message_t,meta_t,route_name_t,route_function_t,route_function_sub_t,url_t,req_t,user_ip,user_ua,aud_src_t) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', ['Info',req.message,req.meta,req.routeName,req.routeFunction,req.routeFunctionSub,req.url,req.req,req.userIP,req.userUA,'DomainName.tld'])
		.then(data => {
			results.push({status: 'pass'})
		})
		.catch(error => {
			results.push({status: 'fail', error: error})
		})
	
	return results
}