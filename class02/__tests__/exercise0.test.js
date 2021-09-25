const { describe, expect, it } = require("@jest/globals");
const reverseString = require("../exercise0");

describe("Reverse strings", () => {
  it("Rayan => naray", async () => {
    const result = reverseString("Rayan");
    expect(result).toBe("nayar")
  });
  it("reviver", async () => {
    const result = reverseString("reviver");
    expect(result).toBe("reviver")
  })
  it("chuv4", async () => {
    const result = reverseString("chuv4");
    expect(result).toBe("4vuhc")
  })
})