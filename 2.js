function fetched_cache(){
	let data = localStorage.getItem("key");
	if(!data){
		axios({
		  method: 'GET',
		  url: URL
		}).then((response) => {
			  localStorage.setItem(key,response);
			}
	}
}