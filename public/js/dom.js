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


selectors.engBtn.addEventListener('click', () => {
	fetch('/clubs/engineering', 'GET', data, () => {
		renderEngineeringClub();
	});
});

selectors.englishBtn.addEventListener('click', () => {
	fetch('/clubs/english', 'GET', data, () => {
		renderEnglishClub();
	});
});

function renderEngineeringClub(){

};

function renderEnglishClub(){

};



