var BingoTicket = require("./bingoTicket");

describe("BingoTicket", function(){

  describe("ctor", function(){
    it("should allocate numbers to the correct cells", function(){
      var testNumbers = [01,17,22,47,52,04,36,53,60,70,26,37,49,74,81];
      var rows = [
        [01,17,22,,47,52,,,],
        [04,,,36,,53,60,70,],
        [,,26,37,49,,,74,81]
      ];
      var ticket = new BingoTicket(testNumbers);
      expect(ticket.rows).toEqual(rows);
    });
  });

});
