function checkurl1(index) {
  var strU = "http";
  strU += "://";
  strU += "";
  var ul = [
    '9st@qqme',
    'i92VIP77@qqlive',
  ];
  var strU2 = ul[index];
  strU2 = strU2.replace(/@qq/g,'.');
  strU2 = strU2.replace(/VIP/g,'');
  strU += strU2;
  location.href = strU;
}
var host = window.location.host;
var el = document.getElementById('host');
el.innerHTML = host;