function telephoneCheck(str) {
  let onlyNum = str.replace(/\D/g,"")
  let howManyNum = onlyNum.length
  let hasParenthesis = (/\(|\)/g).test(str)
  let correctParenthesis = (/\(\d{3}\)/g).test(str)
  let result = false;
  if (howManyNum < 10 &&
      !(/[^0-9\(\)\-\s]/g).test(str)){
    result = false
  }else if (howManyNum === 10 && !(/[^0-9\(\)\-\s]/g).test(str)){
     if(!hasParenthesis){
        result = true
      }else if(correctParenthesis){
        result = true
      }
  }else if (howManyNum === 11 && !(/[^0-9\(\)\-\s]/g).test(str)){
    if((/^1/g).test(str))
      if(!hasParenthesis){
        result = true
      }else if(correctParenthesis){
        result = true
      }
  }
  console.log(result)
  return result

}

telephoneCheck("1 555)555-5555");
telephoneCheck("(6054756961)")
telephoneCheck("555)-555-5555")
telephoneCheck("(555)5(55?)-5555")
telephoneCheck("1 555-555-5555")