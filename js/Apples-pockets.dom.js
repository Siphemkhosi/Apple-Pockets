domFunction = theApplePlanner();
const setInputButtonElem = document.querySelector(".calculate")

settingupdateButtonElem.addEventListener('click', function(){

    numOfPacketsetButton= Number(document.querySelector(".numberofpackets").value);
    applePriceButton = Number(document.querySelector(".pricingapple").value);
    packetPricesetButton= Number(document.querySelector(".pricingpackets").value); 
    recommendedPricesetButton = Number(document.querySelector(".recomend").value);

    domFunction.setPacketNumber(Number(numOfPacketsetButton));
    domFunction.setApplePrice(Number( applePriceButton));
    domFunction.setPacketPrice(Number(packetPricesetButton));
    domFunction.setRecommendedNumber(Number(recommendedPricesetButton));

    // const boxButton = document.querySelector(".b");
    // const appleTotalBut = document.querySelector(".n");
    // const perPocket = document.querySelector(".a");
    // const Profit = document.querySelector(".p");
    numOfPacketsetButton.innerHTML = domFunction.getPacketNumber();
    applePriceButton.innerHTML = domFunction.getApplePrice();
    packetPricesetButton.innerHTML = domFunction.getPacketPrice();
    recommendedPricesetButton.innerHTML = domFunction.getRecommendedNumber();
})