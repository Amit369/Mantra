let arrayObj = [{ 'id': 1, 'type': 'external'},
				{ 'id': 2},
				{ 'id': 3, 'type': 'internal'}];
let typeArray = arrayObj.filter((element) => {
        element.type === 'external')
}