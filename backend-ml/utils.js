/*
 * Splits the price between an integer part and a decimal part.
 * Ej: xxxx.yy -->  {integerPart: xxxx, decimalPart: yy}
 */
function splitPrice(amount){
   const splittedAmount = amount.toString().split(".");
   const integerAmount = parseInt(splittedAmount[0])
   let decimalAmount;

   if(splittedAmount.length > 1){
     const decimalString = splittedAmount[1].slice(0,2);
     decimalAmount = parseInt(decimalString, 10);
   }
   else {
     decimalAmount = 0;
   }

   return {
     integerPart: integerAmount,
     decimalPart: decimalAmount
   };
}

module.exports = {
  splitPrice: splitPrice
};
