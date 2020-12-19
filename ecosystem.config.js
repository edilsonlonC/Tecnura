module.exports = {
	apps : [{
		name: 'worker',
		script: 'index.js',
		env:{
			'NODE_ENV':'dev'
		},
    watch: '.'
	}, {
		name: 'my_app',
    script: './app',
  }],

};
