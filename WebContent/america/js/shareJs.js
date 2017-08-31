var BASE_PATH = "http://www.lutao.com/front";

if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i)=="6." 
	|| navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." 
	|| navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8." 
	|| navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
	
	loadJS(BASE_PATH + '/js/kissy/seed-min.js',function (){
		KISSY.config({packages: {'gallery': { base: BASE_PATH + '/js/kissy/'}},modules: {'sizzle':{alias: ['node']},'calendar':{alias: ['gallery/calendar-deprecated/1.0/']},'datalazyload':{alias: ['gallery/datalazyload/1.0/']},'switchable':{alias: ['gallery/switchable/1.3.1/']},'imagezoom':{alias: ['gallery/imagezoom/1.0/']},'waterfall':{alias: ['gallery/waterfall/1.0/']},'flash':{alias: ['gallery/flash/1.0/']}}});
	});
}else{
	document.write(unescape("%3Cscript src=\"" + BASE_PATH + "/js/kissy/seed-min.js\" %3E%3C/script%3E"));
	document.write(unescape("%3Cscript%3E KISSY.config({packages: {'gallery': { base: '" + BASE_PATH + "/js/kissy/'}},modules: {'sizzle':{alias: ['node']},'calendar':{alias: ['gallery/calendar-deprecated/1.0/']},'datalazyload':{alias: ['gallery/datalazyload/1.0/']},'switchable':{alias: ['gallery/switchable/1.3.1/']},'imagezoom':{alias: ['gallery/imagezoom/1.0/']},'waterfall':{alias: ['gallery/waterfall/1.0/']},'flash':{alias: ['gallery/flash/1.0/']}}});%3C/script%3E"));
}

//加载外部js,为兼容傻X的IE系列
function loadJS(url, success) {
	var domScript = document.createElement('script');
	domScript.src = url;
	success = success || function(){};
	domScript.onload = domScript.onreadystatechange = function() {
	    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
	    	success();
	    	this.onload = this.onreadystatechange = null;
	    	this.parentNode.removeChild(this);
    	}
  	}
  	document.getElementsByTagName('head')[0].appendChild(domScript);
}