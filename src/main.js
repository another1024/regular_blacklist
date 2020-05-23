// ==black_list==
// @name         black_list
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Another1024
// @match        *://*/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @grant       GM_registerMenuCommand
// ==/black_list==
import Command from './command';
var black_list = {"blog.csdn.net":'/<[^>]+>/gim'};
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
	const command = new Command();
	GM_registerMenuCommand("控制面板", command.create);
    host = window.location.host;
    console.log(host);
    if(black_list[host]){
        var int=self.setInterval(main(),1000);
    }
        // Your code here...
})();
