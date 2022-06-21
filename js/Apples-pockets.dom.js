var domFunction = theApplePlanner()
const setInputButtonElem = document.querySelector(".Calculate")


const numOfPacketsetButton = document.querySelector(".numberofpackets")
const  applePriceButton = document.querySelector(".pricingapple")
const  packetPricesetButton = document.querySelector(".pricingpackets")
const recommendedPricesetButton =document.querySelector(".recomend")



let  boxButton = document.querySelector(".boxprice");
     
let appleTotalBut =document.querySelector(".totalapples");  
                     
let perPocket = document.querySelector(".applesinpac")  

let Profit = document.querySelector(".requiredprofit")



setInputButtonElem.addEventListener('click', function(){

// alert(setInputButtonElem)

//reference apple buying data
   
 
// set apple buying data
    domFunction.setAppleBoxPrice(Number(boxButton.value));
    domFunction.setAppleTotal(Number(appleTotalBut.value));
    domFunction.setAppleInPacket(Number(perPocket.value));
    domFunction.setProfit(Number(Profit.value));

// 20/100 =  recome/10
// recom = 0.2 *10
//       recomme =  2
// referenced calculate  apple data
  
   domFunction.numOfPacs() 
   numOfPacketsetButton.value = domFunction.getPacketNumber();


   
   domFunction.ApplePrice()
   applePriceButton.value = domFunction.getApplePrice();


   
   packetPricesetButton.value = domFunction.priceOfPacs();
  

    domFunction.setRecommendedNumber()
    recommendedPricesetButton.value = domFunction.getRecommendedNumber();


})