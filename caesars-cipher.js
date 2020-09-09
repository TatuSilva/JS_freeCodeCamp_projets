function rot13(str) {
  var alfabeto = [ 
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z' ]

  var result = [];
  
  for(let i = 0; i < str.length; i++){
    var index = str.charCodeAt(i)
    //console.log(index)
      if(index >= 65 && index <= 77){
        result.push(String.fromCodePoint(index+13));
      }else if(index > 77 && index <= 90){
        result.push(String.fromCodePoint(index-13));
      }else{
        result.push(String.fromCodePoint(index))
      }
    };
    console.log(result.join(""))
    return result.join("")
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
