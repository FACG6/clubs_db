
const fs = require('fs');
const path = require('path');

const handelHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, {
        'content-type': 'text/html',
      });
      response.end('<h1>Internal Server Error</h1>');
    } else {
      response.writeHead(200, {
        'content-type': 'text/html',
      });
      response.end(file);
    }
  });
};

const handelServePages = (request, response) => {
  const endpoint = request.url;
  const extantion = path.extname(endpoint).substr(1);
  const contentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    json: 'application/json',
    jpg: 'image/jpg',
    png: 'image/png',
    ico: 'image/x-icon',
  };

  const filepath = path.join(__dirname, '..', ...endpoint.split('/'));
  fs.readFile(filepath, (error, file) => {
    if (error) {
      const pathfile = path.join(__dirname, '..', 'public', 'pages', 'pageNotFound.html');
      fs.readFile(pathfile, (filee) => {
        response.writeHead(404, {
          'content-Type': 'text/html',
        });
        response.end(filee);
      });
    } else {
      response.writeHead(200, {
        'content-type': contentType[extantion],
      });
      response.end(file);
    }
  });
};

const handeCreate = (request, response) => {

};

const handeClubs = (request, response) => {

};

const handelPageNotFound = (request, response) => {
  const pathfile = path.join(__dirname, '..', 'public', 'pages', 'pageNotFound.html');
  fs.readFile(pathfile, (error, file) => {
    if (error) {
      response.writeHead(500, {
        'Content-Type': 'text/html',
      });
      response.end('<h1>Sorry,  internal server error</h1>');
    } else {
      response.writeHead(404, {
        'content-Type': 'text/html',
      });
      response.end(file);
    }
  });
};

module.exports = {
  handelHome,
  handelServePages,
  handeCreate,
  handelPageNotFound,
  handeClubs
};

