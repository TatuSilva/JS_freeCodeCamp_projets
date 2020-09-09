function convertToRoman(num) {

    if (!num || num <= 0){
      result = undefined
  }
    
    var milhar = Math.floor(num/1000)
      var sobraMil = Math.floor(num-(milhar*1000))
    var centena = Math.floor(sobraMil/100)
      var sobraCem = Math.floor(sobraMil-centena*100)
    var dezena = Math.floor(sobraCem/10)
      var sobraDez = Math.floor(sobraCem-dezena*10)
    var unidade = Math.floor(num-(milhar*1000+centena*100+dezena*10))

    //console.log(milhar,centena, dezena, unidade)
    
    var result = "M".repeat(milhar)
//CENTENA
      if(centena === 1||centena === 2||centena === 3){
        result+="C".repeat(centena)
      }else if(centena === 4){
        result+="CD"
      }else if(centena === 5){
        result+="D"
      }else if(centena === 6||centena === 7||centena === 8){
        result+="D"+"C".repeat(centena-5)
      }else if(centena === 9){
        result+="CM"
     }
//DEZENA
     if(dezena === 1||dezena === 2||dezena === 3){
        result+="X".repeat(dezena)
      }else if(dezena === 4){
        result+="XL"
      }else if(dezena === 5){
        result+="L"
      }else if(dezena === 6||dezena === 7||dezena === 8){
        result+="L"+"X".repeat(dezena-5)
      }else if(dezena === 9){
        result+="XC"
     }
//UNIDADE
     if(unidade === 1||unidade === 2||unidade === 3){
        result+="I".repeat(unidade)
      }else if(unidade === 4){
        result+="IV"
      }else if(unidade === 5){
        result+="V"
      }else if(unidade === 6||unidade === 7||unidade === 8){
        result+="V"+"I".repeat(unidade-5)
      }else if(unidade === 9){
        result+="IX"
     }

 return result
}

convertToRoman(1023);
