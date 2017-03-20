var origin = function origin() {
  if (window.location.href.indexOf('localhost') !== -1) {
    return 'http://localhost:3005/rest/v1/';
  } else if (window.location.href.indexOf('bluemix') !== -1) {
    // return bluemix app url
  }
  return 'http://localhost:3005/rest/v1/';
};

userApp.constant('REST_URL', {
  backendUrl: origin()
});
