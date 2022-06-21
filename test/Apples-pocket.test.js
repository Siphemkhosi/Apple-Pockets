
// describe('The Apple packets price planner app', function(){

// 	it('should calculate the apple Price ', function() {
// 		// test the scenario here...
// 		assert.equal(2.00, theapplePlanner(40, 20, 5, 2.5));
// 	});


// 	it('should return the number of packets ', function() {
// 		// test the scenario here...
// 		assert.equal(4, theapplePlanner(40, 20, 5, 2.5));
		
// 	});


//   it("use  set values", function() {
           
//              letapplePlanner = theapplePlanner(40, 20, 5, 2.5);
            
//              applePlanner.ApplePrice();
//              assert.equal(2.00, applePlanner.getApplePrice());
          
       
//             })
    


// });


// it("should set price of goods on monday ", function() { 
  
//  const  mon = Price();
 

//   assert.equal("Please Stop!!!", traffic.setlightType())
// });




describe('The Apple packets price planner app', function() {
    it ('should set the apple box  price', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setAppleBoxPrice(40.00);
       
		assert.equal(40.00, applePlanner.getAppleBoxPrice());
      

	});
    it ('should set the total of apples in a box', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setAppleTotal(20);
       
		assert.equal(20, applePlanner.getAppleTotal());
      

	});
    it ('should set how many apples in a packet ', function(){

		const applePlanner = theApplePlanner();
        
		applePlanner.setAppleInPacket(5);
       
		assert.equal(5, applePlanner.getAppleInPacket());
      

	})
    it ('should set the required profit', function() {

		const applePlanner = theApplePlanner();
        
		applePlanner.setProfit(10);
       
		assert.equal(10, applePlanner.getProfit());
      

	});

  
 


    describe("use the values", function(){
        it("use  set values", function() {
         const applePlanner = theApplePlanner();
         applePlanner.setAppleBoxPrice(40.00);
         applePlanner.setAppleTotal(20);
        
         applePlanner.ApplePrice();
         assert.equal(2.00, applePlanner.getApplePrice());
      
   
        })

        it("use  set values", function() {
            const applePlanner = theApplePlanner();
            applePlanner.setAppleTotal(20);
            applePlanner.setAppleInPacket(5);
          
            applePlanner.numOfPacs();
          
            assert.equal(4, applePlanner.getPacketNumber());
           })

          
        

           it("use  set values", function() {
            const applePlanner = theApplePlanner();
            applePlanner.setAppleTotal(20);
            applePlanner.setAppleInPacket(4);

            applePlanner.numOfPacs();
        
            assert.equal(5, applePlanner.getPacketNumber());
      
           })

           it("use  set values", function() {
            const applePlanner = theApplePlanner();
            applePlanner.setAppleBoxPrice(40)
            applePlanner.setAppleTotal(20)
            applePlanner.setAppleInPacket(5);
            applePlanner.ApplePrice(2.00);
           
          
        
            assert.equal(10.00, applePlanner.priceOfPacs());
      
           })
      
           it ('should set the recommended price', function() {

            		const applePlanner = theApplePlanner();
                applePlanner.setAppleBoxPrice(40)
                applePlanner.setAppleTotal(20)
                applePlanner.setAppleInPacket(5);
                applePlanner.setProfit(10);
                applePlanner.numOfPacs();
                applePlanner.getPacketNumber();
             
                applePlanner.priceOfPacs();
                applePlanner.ApplePrice();
                applePlanner.setRecommendedNumber() ; 
            		assert.equal(4, applePlanner.getRecommendedNumber());
                  
            
            	});

   
   });

// 	it ('should set the apple price', function() {

// 		const applePlanner = theApplePlanner();
        
// 		applePlanner.setApplePrice(2.00);
       
// 		assert.equal(2.00, applePlanner.getApplePrice());
      

// 	});
//     it ('should set the packet price', function() {

// 		const applePlanner = theApplePlanner();
        
// 		applePlanner.setPacketPrice(10.00);
       
// 		assert.equal(10.00, applePlanner.getPacketPrice());
      

// 	});
//     it ('should count the number of packets', function() {

// 		const applePlanner = theApplePlanner();
        
// 		applePlanner.setPacketNumber(4);
       
// 		assert.equal(4, applePlanner.getPacketNumber());
      

// 	});
//   
});
