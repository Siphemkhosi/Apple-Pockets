
function theApplePlanner(){
let numberOfPackets = 0;
let pricingApples =0;
let  priOfPackets =0;

// let pricingPackets =0;
// let numberOfPackets =0;
let priceRecommend =0;
let boxPrice = 0;
let totalApples = 0;
let applesInpac = 0;
let theProfit = 0;


// Apple Buying Data
function setAppleBoxPrice(boxprice){
    boxPrice= boxprice;
}

function getAppleBoxPrice(){
   return boxPrice.toFixed(2);
}
function setAppleTotal(totalapples){
    totalApples = totalapples;
   }

   function getAppleTotal(){
       return totalApples.toFixed(2)
   }

   function setAppleInPacket(applesinpac){
    applesInpac = applesinpac;
   }

   function  getAppleInPacket(){
       return  applesInpac;
   }

   function setProfit(requiredprofit){
     if(requiredprofit <= 100){
    theProfit = requiredprofit
   }
    if(requiredprofit > 100){
        theProfit = alert("percentage is  not greater than 100%")
    }
}

   function  getProfit(){
       return theProfit;
   }


//    Apple Price Calculation


    function ApplePrice(){
        pricingApples = boxPrice / totalApples;
       
    }

    function getApplePrice(){

        return pricingApples.toFixed(2);
      }



      function numOfPacs(){
        numberOfPackets = totalApples / applesInpac;
     
    }

    function getPacketNumber(){
        return numberOfPackets;
      }

      function priceOfPacs(){
       

        priOfPackets = pricingApples * applesInpac;
       return priOfPackets;
    }

   
 function setRecommendedNumber(){
    priceRecommend = (priOfPackets * theProfit/100) + priOfPackets;
      }
        
      function getRecommendedNumber(){
        return  priceRecommend;
      }

  


    
   
    // function setPacketNumber(numberofpackets){
    //   return numberOfPackets =numberofpackets;
    // }
      
    // function getPacketNumber(){
    //   return numberOfPackets; 
    // }

    // function setRecommendedNumber(recomend){
    //     return  priceRecommend =recomend;
    //   }
        
    //   function getRecommendedNumber(){
    //     return  priceRecommend;
    //   }

    return{
        setAppleBoxPrice,
        getAppleBoxPrice,
        setAppleTotal,
        getAppleTotal,
        setProfit,
        getProfit,
        setAppleInPacket,
        getAppleInPacket,
        ApplePrice,
        numOfPacs,
        priceOfPacs,
        setRecommendedNumber,
        getRecommendedNumber,
        // setApplePrice,
        getApplePrice,
        // setPacketPrice,
        // getPacketPrice,
        // setPacketNumber,
        getPacketNumber,
        // setRecommendedNumber,
        // getRecommendedNumber

    }
}