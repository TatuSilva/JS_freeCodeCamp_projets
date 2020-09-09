function checkCashRegister(price, cash, cid) {

     let troco = [];
     let values = [100,20,10,5,1,0.25,0.1,0.05,0.01]
     let names = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE','QUARTER','DIME','NICKEL','PENNY']
     let totalIn = 0;
     let trocoDado = 0;

     cid.forEach(arg => totalIn += arg[1])
  
    var change = cash - price;
    console.log("troco original: "+change)
   const obj ={
     status: "OPEN",
     change: []
   }
    console.log(totalIn)
   change == totalIn? obj.status = "CLOSED":
   change <= totalIn? obj.status = "OPEN":
                      obj.status = "INSUFFICIENT_FUNDS";
     
     if (obj.status === "CLOSED"){
           troco = cid;
     }else{
       for (let i = 0; i < values.length; i++){
         let emCaixa = cid[values.length-(i+1)][1]

         if ((change/values[i]).toFixed(2) >= 1){
           if((change/values[i])*values[i] <= emCaixa){
             troco.push([names[i],(Math.floor(change/values[i]))*values[i]])
             change = (change - ((Math.floor(change/values[i]))*values[i])).toFixed(2)

           }else{
             troco.push([names[i],emCaixa])
             change = (change - emCaixa).toFixed(2)

           }
         }
       }
     }
      troco.forEach(num => trocoDado += num[1])
        if (trocoDado < (cash - price)){
           obj.status = "INSUFFICIENT_FUNDS"
           troco = []
         }
 Object.assign(obj.change,troco)
 console.log(obj)
 return obj;
}
 
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "INSUFFICIENT_FUNDS", change: []}.