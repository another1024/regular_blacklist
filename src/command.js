class Command {

	constructor() {

	}
	
	create(){
		var jquery_class = require("jquery");
		jquery_class(top.document.body).html(()=> {
			let GMList = GM_listValues();
			let list = [];

			for (let i = 0; i < GMList.length; i++) {
				list[i] = GM_getValue(GMList[i]);
			}

			let tableStr = '';

			list.forEach((v, i)=> {
				tableStr += `
				<tr>
				<td>${v.url}</td>
				<td>${v.regular}</td>
             	<td>
                	<p>移除</p>
              	</td>
				</tr>
				`;
			});

			return `
				<table>
				<thead>
					<tr>
						<th><b>url</b></th>
						<th><b>regular</b></th>
						<th><b>delete</b></th>

					</tr>
				</thead>
				<tbody>
					${tableStr}
				</tbody>
				</table>
        `;
    });
		
	}
	
	add_re(url,regular){
		GM_setValue(url,{url,regular});
	
	}
	
	delete_re(url){
		GM_deleteValue(url)
	
	}
}

export default Command;
	
 


