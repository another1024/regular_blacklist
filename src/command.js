import {show} from './show.js'

function create(){
		show();

	$("input[name='delete_reg']").click(function () {
     		
		var url=$(this).attr("id");
		
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
	
 


