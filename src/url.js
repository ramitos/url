var url = require('url');

module.exports.parse = function(urlStr, parseQueryString, slashesDenoteHost){
  if(!urlStr.match(/^[^:]+(?=:\/\/)/)){
    urlStr += 'http://';
  }

  var parsed = url.parse(urlStr, parseQueryString, slashesDenoteHost);
  parsed.href = parsed.href.replace(/^http\:\/\//, '');
  parsed.protocol = null;

  return parsed;
};

module.exports.format = url.format;
module.exports.resolve = url.resolve;