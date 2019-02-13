requestXHR('/clubs', 'GET', null, (err, res) => {
  if (err) {
    document.getElementsByTagName('div')[1].appendChild(document.createTextNode('ERROR'));
  }
  console.log(res);
  res.forEach(element => {
    const image = document.createElement('img');
    image.src = `${element.type_image}`;
    const divImage = document.getElementsByTagName('div')[1];
    divImage.appendChild(image);
   });
});