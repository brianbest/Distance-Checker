//Javascript

function checkIt(){
  var isItClose = distance($('#lat1').val(),$('#lon1').val(),$('#lat2').val(),$('#lon2').val(),$('#unit').val())
  var minDis = $('#checkDis').val();
  if(isItClose > minDis){
    $('#output').html('Not close');
  }
  else if(isItClose <= minDis){
    $('#output').html('its close');
  }else{

    $('#output').html('Hodor');

  }
}

function distance(lat1,lon1,lat2,lon2,unit){
  var theta = lon1 - lon2;
  var radInfo = new Array(
    lat1 * Math.PI/180,
    lat2 * Math.PI/180
  );
  var dist = Math.sin(radInfo[0]) * Math.sin(radInfo[1]) + Math.cos(radInfo[0]) * Math.cos(radInfo[0]) * Math.sin(theta);
  dist = Math.acos(dist);
  dist = dist * Math.PI/180;
  var oBrian = dist * 60 * 1.1515;
  var convert = unit.toUpperCase();
  switch(convert){
  case 'K':
    return (oBrian * 1.609344);
    break;
  case 'N':
    return (oBrian * 0.8684);
    break;
  case default:
    return (oBrian);
    break;
  }
}
