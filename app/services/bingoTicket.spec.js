var BingoTicket = require("./bingoTicket");

describe("BingoTicket", function(){

  describe("ctor", function(){
    it("should allocate numbers to the correct cells", function(){
      var testNumbers = [1,17,22,47,52,4,36,53,60,70,26,37,49,74,81];
      var rows = [
        [1,17,22,0,47,52,0,0,0],
        [4,0,0,36,0,53,60,70,0],
        [0,0,26,37,49,0,0,74,81]
      ];
      var ticket = new BingoTicket(testNumbers);
      expect(ticket.rows).toEqual(rows);
    });
  });

});
