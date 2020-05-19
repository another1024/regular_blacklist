// ==UserScript==
// @name         black_list
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Another1024
// @match        *://*/*
// ==/UserScript==
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
    host = window.location.host;
    console.log(host);
    if(black_list[host]){
        var int=self.setInterval(main(),1000);
    }
        // Your code here...
})();