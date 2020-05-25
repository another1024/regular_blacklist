import $ from 'jquery'
import {show} from './show.js'
function html_decode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}
function create(){
		show();

	$("input[name='delete_reg']").click(function () {
     		
		var url=$(this).attr("id");
		url=html_decode(url)
		GM_deleteValue(url)
		create();
	});


	$("input[name='regular_add']").click(function () {
     		
		var url=$("input[name='url_reg']").val();
		var regular=$("input[name='regular_reg']").val();
		GM_setValue(url,{url,regular});
		create();
	});

}
export{create};
	
 


