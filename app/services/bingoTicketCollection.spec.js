var BingoTicketCollection = require("./bingoTicketCollection");

describe("BingoTicketCollection", function(){

  describe("ctor", function(){

    it("should create tickets from the specified ticket string", function(){
      var testString = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";
      var testTicket = [
        [1,17,22,0,47,52,0,0,0],
        [4,0,0,36,0,53,60,70,0],
        [0,0,26,37,49,0,0,74,81]
      ];

      var strip = new BingoTicketCollection(testString);
      expect(strip.tickets.length).toBe(6);
      expect(strip.tickets[0].rows).toEqual(testTicket);
    });

  });

});