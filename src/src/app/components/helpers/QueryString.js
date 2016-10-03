class QueryString {
  constructor(str) {
    this.str = str
  }

  toJson() {
    var pairs = this.str.split('&');
  
    var result = {};
    pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
  }
}

export default QueryString
