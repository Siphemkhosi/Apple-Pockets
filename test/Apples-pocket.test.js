describe('The Apple packets price planner app', function() {

	it ('should set the apple price', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setApplePrice(2.00);
       
		assert.equal(2.00, applePlanner.getApplePrice());
      

	});
    it ('should set the packet price', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setPacketPrice(10.00);
       
		assert.equal(10.00, applePlanner.getPacketPrice());
      

	});
    it ('should count the number of packets', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setPacketNumber(4);
       
		assert.equal(4, applePlanner.getPacketNumber());
      

	});
    it ('should set the recommended price', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setRecommendedNumber(4);
       
		assert.equal(4, applePlanner.getRecommendedNumber());
      

	});
});
