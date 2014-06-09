

//checkIt() calls distance() then compares return value with a min distance value.
function checkIt(){
  $('#output').html('');
  var isItClose = distance(parseFloat($('#lat1').val()),parseFloat($('#lon1').val()),parseFloat($('#lat2').val()),parseFloat($('#lon2').val()),$('#unit').val());
  var minDis = parseInt($('#checkDis').val());
  if(isItClose > minDis){
    $('#output').html('Not close');
  }
  else if(isItClose < minDis){
    $('#output').html('its close');
  }else{

    $('#output').html('Hodor');

  }
}

// distance() will return the distance in the specified unit
function distance(lat1,lon1,lat2,lon2,unit){
  var theta = lon1 - lon2;
  theta = theta * Math.PI/180;
  var radInfo = new Array(
    lat1 * Math.PI/180,
    lat2 * Math.PI/180
  );
  var dist = Math.sin(lat1 * Math.PI/180) * Math.sin(lat2 * Math.PI/180) + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.cos(theta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  var oBrian = dist * 60 * 1.1515;

  // Case Senceitive so convert if needed

  switch(unit){
  case 'K':
    return (oBrian * 1.609344);
    break;
  case 'M':
    return (oBrian);
    break;
  }
}
