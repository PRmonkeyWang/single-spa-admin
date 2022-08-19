module.exports = {
	devServer:{
		port:8081,
		headers:{
			"Access-Control-Allow-Origin": "*"
		}
	},
	configureWebpack:{
		output:{
			library:'qiankun-child',
			libraryTarget:'umd'
		}
	}
}