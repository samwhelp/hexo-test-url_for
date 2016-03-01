#!/usr/bin/env node

var _ = require('lodash');

var hexo = {
	config: {
		root: '/',
		relative_link: false
	},
	helper: require('./url_for.js'),
	url_for: function(path) {
		return this.helper.call(this, path);
	},
	log_url_for: function(path) {
		var args = path;
		if (_.isString(path)) {
			args = '"' + path + '"';
		}
		console.log('url_for(' + args + ') ==> ' + '"' + this.url_for(path) + '"');
	}
};


var test = {
	run_case: function() {
		hexo.log_url_for('#');
		hexo.log_url_for('#top');
		hexo.log_url_for('http://www.google.com');
		hexo.log_url_for('https://www.google.com');
		hexo.log_url_for('//www.google.com');
		hexo.log_url_for('/archives');
		hexo.log_url_for('  /archives  ');
		hexo.log_url_for('2016/03/01');
		hexo.log_url_for('2016/03/01/index.html');
		hexo.log_url_for('./x/y/z/index.html');
		hexo.log_url_for('../x/y/z/index.html');
		hexo.log_url_for('../../x/y/z/index.html');

		return; //if use 3.2.0 must return here;

		hexo.log_url_for(false);
		hexo.log_url_for(true);
		hexo.log_url_for('false');
		hexo.log_url_for('true');
		hexo.log_url_for(0);
		hexo.log_url_for('0');
	},
	run_case_root: function() {

		hexo.config.root = '/';
		console.log('');
		console.log('config.root = "' + hexo.config.root + '";');
		console.log('');
		this.run_case();
	},
	run_case_subroot: function() {
		hexo.config.root = '/a/b/c';
		console.log('');
		console.log('config.root = "' + hexo.config.root + '";');
		console.log('');
		this.run_case();
	},
	run_case_subroottail: function() {
		hexo.config.root = '/a/b/c/';
		console.log('');
		console.log('config.root = "' + hexo.config.root + '";');
		console.log('');
		this.run_case();
	},
	run_case_rootnull: function() {
		hexo.config.root = null;
		console.log('');
		console.log('config.root = ' + hexo.config.root + ';');
		console.log('');
		this.run_case();
	},
	run: function() {
		this.run_case_root();
		this.run_case_subroot();
		this.run_case_subroottail();
		this.run_case_rootnull();
	}
};

console.log('');
console.log('==================== fix ====================');
console.log('');

hexo.helper = require('./url_for.js')

test.run();

console.log('');
console.log('==================== 3.2.0 ====================');
console.log('');

hexo.helper = require('./url_for.3.2.0.js')

test.run();
