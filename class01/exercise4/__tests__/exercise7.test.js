const { describe, expect, it } = require("@jest/globals");
const getNames = require("../exercise7");

describe("Ages sum tests", () => {
  it("Rayan + Wilbert, Bruno + Germano", async () => {
    const result = getNames([{ firstname: "Rayan", lastname: "Wilbert" }, { firstname: "Bruno", lastname: "Germano" }]);
    expect(result).toEqual(['Rayan Wilbert', 'Bruno Germano'])
  });
  it("Rayan + Wilbert, false + true", async () => {
    const result = getNames([{ firstname: "Rayan", lastname: "Wilbert" }, { firstname: false, lastname: true }]);
    expect(result).toEqual(['Rayan Wilbert'])
  });
  it("Null object", async () => {
    const result = getNames([{}]);
    expect(result).toEqual([])
  });
  it("Different object", async () => {
    const result = getNames([{ name: 'a'}]);
    expect(result).toEqual([])
  });
})
