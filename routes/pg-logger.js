require('dotenv').config()

const pgPromise = require('./pg-promise')

exports.error = async (req) => {
	var results = []
	await pgPromise.db.none('insert into prod.pg_logger (level_t,file_name_t,route_name_t,route_function_t,route_line_t,message_t,user_url_t,user_ip_t,user_ua_t,user_req_t,aud_src_t) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', ['Error',req.fileName,req.routeName,req.routeFunction,req.routeLine,req.message,req.userUrl,req.userIP,req.userUA,req.userReq,'Node.js Scraper'])
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
	await pgPromise.db.none('insert into prod.pg_logger (level_t,file_name_t,route_name_t,route_function_t,route_line_t,message_t,user_url_t,user_ip_t,user_ua_t,user_req_t,aud_src_t) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', ['Info',req.fileName,req.routeName,req.routeFunction,req.routeLine,req.message,req.userUrl,req.userIP,req.userUA,req.userReq,'Node.js Scraper'])
		.then(data => {
			results.push({status: 'pass'})
		})
		.catch(error => {
			results.push({status: 'fail', error: error})
		})
	
	return results
}