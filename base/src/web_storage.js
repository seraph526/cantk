/*
 * File: web_storage.js 
 * Author: Li XianJing <xianjimli@hotmail.com>
 * Brief:  Web Storage
 * 
 * Copyright (c) 2014 - 2015  Li XianJing <xianjimli@hotmail.com>
 * 
 */


function WebStorage()  {
}

WebStorage.nameSpace = "";
WebStorage.setNameSapce = function(nameSpace) {
	WebStorage.nameSpace = nameSpace;

	return;
}

WebStorage.getNameSapceKey = function(key) {	
	if(WebStorage.nameSpace) {
		return WebStorage.nameSpace +"-"+ key;
	}
	else {
		return key;
	}
}

WebStorage.getStorage = function() {
	if(window.localStorage) {
		return window.localStorage;
	}

	return {};
}

WebStorage.set = function(key, value, compress) {
	var storage = WebStorage.getStorage();
	
	key = WebStorage.getNameSapceKey(key);
	if(compress && !isIE()) {
		storage.setItem(key, strCompress(value));
	}
	else {
		storage.setItem(key, value);
	}

	return;
}

WebStorage.get = function(key, decompress) {
	var storage = WebStorage.getStorage();

	key = WebStorage.getNameSapceKey(key);
	if(decompress && !isIE()) {
		return strDecompress(storage.getItem(key));
	}
	else {
		return storage.getItem(key);
	}
}

WebStorage.remove = function(key) {
	var storage = WebStorage.getStorage();

	key = WebStorage.getNameSapceKey(key);
	storage.removeItem(key);

	return;
}

WebStorage.getInt = function(key) {
	var n = 0;
	var value = WebStorage.get(key);

	if(value) {
		n = parseInt(value);
	}
	
	return n;
}

//////////////////////////////////////////////////////

WebStorage.getSessionStorage = function() {
	if(window.sessionStorage) {
		return window.sessionStorage;
	}

	return {};
}

WebStorage.setSession = function(key, value, compress) {
	var storage = WebStorage.getSessionStorage();
	
	key = WebStorage.getNameSapceKey(key);
	if(compress && !isIE()) {
		storage.setItem(key, strCompress(value));
	}
	else {
		storage.setItem(key, value);
	}

	return;
}

WebStorage.getSession = function(key, decompress) {
	var storage = WebStorage.getSessionStorage();

	key = WebStorage.getNameSapceKey(key);
	if(decompress && !isIE()) {
		return strDecompress(storage.getItem(key));
	}
	else {
		return storage.getItem(key);
	}
}

WebStorage.removeSession = function(key) {
	var storage = WebStorage.getSessionStorage();

	key = WebStorage.getNameSapceKey(key);
	storage.removeItem(key);

	return;
}

WebStorage.reset = function() {
	for(var key in localStorage) {
		localStorage.removeItem(key);
	}
}

WebStorage.dump = function() {
	for(var key in localStorage) {
		console.log(key + ":" + localStorage[key]);
	}
}

