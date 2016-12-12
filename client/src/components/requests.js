var postReq = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https:/127.0.0.1:3000/' + options.url,
    type: 'POST',
    data: options.req,
    success: function (data) {

      // console.log('youtube: Message received', data.items);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      // console.error('youtube: Failed to receive message', data);
    }
  });
};

var getReq = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https:/127.0.0.1:3000/' + options.url,
    type: 'GET',
    success: function (data) {

      // console.log('youtube: Message received', data.items);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      // console.error('youtube: Failed to receive message', data);
    }
  });
};

window.postReq = postReq;
window.getReq = getReq;