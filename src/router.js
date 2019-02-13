const {
    handelHome,
    handelServePages,
    handeCreate,
    handelPageNotFound,
    handeClubs
  } = require('./handler');
  
const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
      handelHome(request, response);
    } else if (endpoint.includes('/public/')) {
      handelServePages(request, response);
    } else if (endpoint === '/create') {
      handeCreate(request, response);
    }  else if (endpoint === '/clubs') {
      handeClubs(request, response);
    } else {
      handelPageNotFound(request, response);
    }
  };
  
module.exports = router;

