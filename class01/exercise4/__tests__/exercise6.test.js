const { describe, expect, it } = require("@jest/globals");
const sumAges = require("../exercise6");

describe("Ages sum tests", () => {
  it("30 + 45 = 75", async () => {
    const result = sumAges(15, '{"name": "Rayan"}', "", '{"age": 30}', '{"age": 45}');
    expect(result).toBe(75)
  });
  it("30 + 15 + 7 = 52", async () => {
    const result = sumAges('23', '{"name": "Pedro"}', "", '{"age": 30}', '{"age": 15}', '{"age": 7}');
    expect(result).toBe(52)
  });
  it("0 = 0", async () => {
    const result = sumAges('23');
    expect(result).toEqual(0)
  });
  it("30 = 30", async () => {
    const result = sumAges('23', '{"name": "Pedro"}', "", '{"age": 30}', '"age": 6', '{"ages": 7}');
    expect(result).toEqual(30)
  });
  it("true => 0", async () => {
    const result = sumAges('{"age": true}');
    expect(result).toEqual(0)
  });
  it("list => 0", async () => {
    const result = sumAges('{"age": [212, 21]}');
    expect(result).toEqual(0)
  });
})
