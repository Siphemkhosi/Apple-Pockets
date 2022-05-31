function theApplePlanner(){
let pricingApples =0;
let pricingPackets =0;
let numberOfPackets =0;
    function setApplePrice(pricingapple){
        pricingApples = pricingapple;
    }
    function getApplePrice(){
      return pricingApples; 
    }
    function setPacketPrice(pricingpackets){
        pricingPackets= pricingpackets
    }
    function getPacketPrice(){
      return pricingPackets; 
    }
    
   
    function setPacketNumber(numberofpackets){
      return numberOfPackets =numberofpackets;
    }
      
    function getPacketNumber(){
      return numberOfPackets; 
    }

    return{
        setApplePrice,
        getApplePrice,
        setPacketPrice,
        getPacketPrice,
        setPacketNumber,
        getPacketNumber
    }
}