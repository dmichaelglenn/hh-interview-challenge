function HSLToHex(h,s,l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
  }

  //shamelessly 'borrowed' this function from github. I'm not a plagerizer
function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      r = parseInt(result[1], 16);
      g = parseInt(result[2], 16);
      b = parseInt(result[3], 16);
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
      }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
    var HSL = new Object();
    HSL['h']=h;
    HSL['s']=s;
    HSL['l']=l;
    return HSL;
  }

  function generateRandomHexColor() {
    //also a stack overflow special just fyi
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return n.slice(0, 6);
}

function generateRandomHSL() {
    var h = Math.floor(Math.random() * 361);
    var s = Math.floor(Math.random() * 101);
    var l = Math.floor(Math.random() * 101);
    return {h: h, s: s, l: l}; 
}

  export { HSLToHex, hexToHSL, generateRandomHexColor, generateRandomHSL };