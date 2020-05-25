import {create} from './command';


function main(reg_rule) {

    var the_html = document.getElementsByTagName("html")[0];
	reg_rule = "/"+reg_rule+"/g"
    console.log(reg_rule);	
	
    the_html.innerHTML=the_html.innerHTML.replace(eval(reg_rule),'');
}


(function() {
    'use strict';
	GM_registerMenuCommand("控制面板", create);
    var host = window.location.host;
    console.log(host);
	var tmp = GM_getValue(host)
	if(tmp){
		var reg_rule = tmp.regular
	    if(reg_rule){
	        var int=self.setInterval(main(reg_rule),1000);
	    }
	}
        // Your code here...
})();
