var parser = require("./ticketStringParser");

describe("ticketStringParser", function(){

  describe("parse()", function(){

    it("should return an array of numbers for a valid string", function(){
      var result = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];
      expect(parser.parse("010203040506070809101112131415")).toEqual(result);
    });

    it("should throw if the argument is not a string", function(){
      expect(function() {parser.parse();})
        .toThrow(new Error("Ticket string must be a string"));
    });

    it("should throw if the string is not an exact multiple of 30 characters long", function(){
      expect(function() {parser.parse("123");})
        .toThrow(new Error("Ticket string must be a multiple of 30 digits long"));
    });

    it("should throw if the string contains a character other than a number", function(){
      expect(function() {parser.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");})
        .toThrow(new Error("Ticket string contains non-numeric characters"));
    });

    it("should throw if the string contains duplicate numbers", function(){
      expect(function() {parser.parse("010203040506070809101112131415161718192021222324252627282929");})
        .toThrow(new Error("Ticket string may not contain duplicate entries"));
    });

    it("should throw if the string contains a number less than 1 or greater than 90", function(){
      expect(function() {parser.parse("000000000000000000000000000000000000000000000000000000000000");})
        .toThrow(new Error("Ticket string may only contain the values 01 to 90"));
      expect(function() {parser.parse("999999999999999999999999999999999999999999999999999999999999");})
        .toThrow(new Error("Ticket string may only contain the values 01 to 90"));
    });
  });
});