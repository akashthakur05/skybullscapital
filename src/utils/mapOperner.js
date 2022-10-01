//  function myNavFunc2(){
//     // If it's an iPhone..
//     if( (navigator.platform.indexOf("iPhone") != -1) 
//         || (navigator.platform.indexOf("iPod") != -1)
//         || (navigator.platform.indexOf("iPad") != -1))
//          window.open("maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=29.041050240864926,79.31415663313055");
//     else
//          window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=29.041050240864926,79.31415663313055");
// }

export function myNavFunc(lat= 29.041050240864926,lng= 79.31415663313055) {
    // If it's an iPhone..
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }
      var ver = iOSversion() || [0];

      var protocol = 'http://';
      if (ver[0] >= 6) {
        protocol = 'maps://';
      }
      window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
    }
    else {
        window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=29.041050240864926,79.31415663313055");
    }
}