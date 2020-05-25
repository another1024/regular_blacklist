import $ from 'jquery'
function html_encode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}

function show(){
		$(top.document.head).html('')	
		$(top.document.body).html(()=> {
			let GMList = GM_listValues();
			let list = [];

			for (let i = 0; i < GMList.length; i++) {
				list[i] = GM_getValue(GMList[i]);
			}

			let tableStr = '';

			list.forEach((v, i)=> {
				var url_put = html_encode(v.url)
				var regular_put = html_encode(v.regular)
				tableStr += `
				<tr>
				<td>${url_put}</td>
				<td>${regular_put}</td>
             	<td>
                	<input id="${url_put}" name="delete_reg" type="button" value="delete">  
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
				<input name="url_reg" type="text" value="">
				<input name="regular_reg" type="text" value="">
				<input name="regular_add" type="button" value="submit">
			
        `;
    });

}
export{show};
