const {
  handelHome,
  handelServePages,
  handeClubs,
  handelPageNotFound,
  addClubHandel,
} = require('./handler');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    handelHome(request, response);
  } else if (endpoint.includes('/public/')) {
    handelServePages(request, response);
  } else if (endpoint === '/clubs') {
    handeClubs(request, response);
  } else if (endpoint === '/create-type') {
    addClubHandel(request, response);
  } else {
    handelPageNotFound(request, response);
  }
};

module.exports = router;
