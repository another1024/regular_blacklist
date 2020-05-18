// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Another1024
// @match        www.baidu.com
// ==/UserScript==

function do_strip(reg,s) {
    return s.replace(reg, '');
}

function main() {
var reg=/<[^>]+>/gim;
var the_html = document.getElementsByTagName("html")[0];
the_html.innerText=do_strip(reg,the_html.innerText);
}


(function() {
    'use strict';
    var int=self.setInterval(main(),1000);
    // Your code here...
})();