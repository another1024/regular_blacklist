import {create} from './command';

var host;
function do_strip(reg,s) {
    return s.replace(reg, '');
}

function main() {

    var the_html = document.getElementsByTagName("html")[0];
    the_html.innerText=do_strip(black_list[host],the_html.innerText);
}


(function() {
    'use strict';
	GM_registerMenuCommand("控制面板", create);
    host = window.location.host;
    console.log(host);
	var reg_rule = GM_getValue(host)
    if(reg_rule){
        var int=self.setInterval(main(),1000);
    }
        // Your code here...
})();
