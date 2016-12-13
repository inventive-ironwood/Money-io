var postReq = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'http://127.0.0.1:8000/' + options.url,
    type: 'POST',
    data: options,
    success: function (data) {

      console.log('Post Request: Message Received, ', data);
      // callback(data.items);
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
    url: 'http://127.0.0.1:8000/' + options.url,
    type: 'GET',
    success: function (data) {

      // console.log('youtube: Message received', data.items);
      callback(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      // console.error('youtube: Failed to receive message', data);
    }
  });
};

var pickCategories = (category) => {
  if (category === 'Restaurant') {
    return 'http://plainicon.com/dboard/userprod/2805_fce53/prod_thumb/plainicon.com-44037-512px.png';
  } else if (category === 'Shopping') {
    return 'https://d30y9cdsu7xlg0.cloudfront.net/png/17663-200.png';
  } else if (category === 'Transportation') {
    return 'http://image.flaticon.com/icons/png/128/67/67994.png';
  } else if (category === 'Groceries') {
    return 'http://image.flaticon.com/icons/png/512/2/2772.png';
  } else if (category === 'Utilities') {
    return 'http://www.iconsdb.com/icons/preview/black/house-xxl.png';
  } else if (category === 'Nightlife') {
    return 'http://www.clker.com/cliparts/I/n/S/M/8/z/cocktail-md.png';
  } else if (category === 'Other') {
    return 'https://d30y9cdsu7xlg0.cloudfront.net/png/203819-200.png';
  }
}

window.postReq = postReq;
window.getReq = getReq;
window.pickCategories = pickCategories;