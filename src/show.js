import $ from 'jquery'

function show(){
		
		$(top.document.body).html(()=> {
			let GMList = GM_listValues();
			let list = [];

			for (let i = 0; i < GMList.length; i++) {
				list[i] = GM_getValue(GMList[i]);
			}

			let tableStr = '';

			list.forEach((v, i)=> {
				tableStr += `
				<tr>
				<td>${v.url}</td>&nbsp
				<td>${v.regular}</td>&nbsp
             	<td>
                	<input id="${v.url}" name="delete_reg" type="button" value="delete">  
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
