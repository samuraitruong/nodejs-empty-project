import { helloWorld } from "@lib/hello-word";

describe("Test suite", () => {
  it("should pass", () => {
    const result = helloWorld();
    expect(result).toBe(true);
  });
});
