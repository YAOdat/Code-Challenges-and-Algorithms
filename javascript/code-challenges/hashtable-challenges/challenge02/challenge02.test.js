"use strict";

const firstRepeatedWord = require("./challenge02.js");

describe("Repeated Word", () => {
  it("should return the first repeated word in a string", () => {
    expect(firstRepeatedWord("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toEqual("ASAC");
  });

  it('should return "no repeated words" if there are no repeated words', () => {
    expect(firstRepeatedWord("This is a test.")).toEqual("No repeated words");
  })

});