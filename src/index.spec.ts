import { helloWorld } from ".";

describe("Test suite", () => {
  it("should pass", () => {
    const result = helloWorld();
    expect(result).toBe(true);
  });
});
