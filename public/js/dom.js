const selectors = querySelectors(['engBtn', 'englishBtn'], ['.main--btn--engBtn', '.main--btn--englishBtn']);

function createNodes(NodeNames, NodeTypes, classNames){
	if (NodeNames.length !== NodeTypes.length || NodeTypes.length !== classNames.length) return "error";
	let nodes = {};
	NodeNames.map((node, index) => {
		nodes[node] = document.createElement(NodeTypes[index]);
		nodes[node].classList.add(classNames[index]);
	});
	return nodes;
};

function querySelectors(ElementNames, selectors){
	if (ElementNames.length !== selectors.length) return "Error";
	let elements = {};
	ElementNames.map((element, index) => elements[element] = document.querySelector(selectors[index]));
	return elements;
};

// console.log(selectors);
selectors.engBtn.addEventListener('click', () => {
	// console.log('ddddddd');
	// fetch('GET', )
})

selectors.englishBtn.addEventListener('click', () => {
	// console.log('jjjjjjjj');
}) 





